// src/background.ts

import { encryptUrl } from './lib/url-convert';

const UESTC_VPN_HOST = 'https://webvpn.uestc.edu.cn';

const isOffCampus = async (): Promise<boolean> => {
    console.log('[UESTC Redirector] Running isOffCampus check...');
    return true;
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status !== 'loading' || !tab.url) {
        return;
    }

    const currentUrl = new URL(tab.url);

    if (currentUrl.hostname.endsWith('.uestc.edu.cn') && currentUrl.hostname !== 'webvpn.uestc.edu.cn') {

        chrome.storage.sync.get(
            {
                isRedirectEnabled: true,
                isNotificationEnabled: true
            },
            async (items) => {
                if (!items.isRedirectEnabled) {
                    console.log(`[UESTC Redirector] Matched: ${tab.url}. But redirect is disabled.`);
                    return;
                }

                const needsVpn = await isOffCampus();
                if (!needsVpn) {
                    console.log('[UESTC Redirector] On-campus network detected. Skipping redirect.');
                    return;
                }

                console.log(`[UESTC Redirector] Matched: ${tab.url}. Redirect is enabled and needed.`);

                const encryptedPath = encryptUrl({
                    url: tab.url || '',
                    schoolHost: '',
                });

                const newUrl = `${UESTC_VPN_HOST}${encryptedPath}`;
                console.log(`[UESTC Redirector] Redirecting to: ${newUrl}`);

                chrome.tabs.update(tabId, { url: newUrl });

                if (items.isNotificationEnabled) {
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: '/icons/fav.png',
                        title: 'WebVPN 重定向成功',
                        message: `已将 ${currentUrl.hostname} 的访问重定向至 WebVPN。`,
                    });
                }
            }
        );
    }
});

chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});