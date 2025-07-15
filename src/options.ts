// src/options.ts

const enableRedirectCheckbox = document.getElementById('enableRedirect') as HTMLInputElement;
const enableNotificationsCheckbox = document.getElementById('enableNotifications') as HTMLInputElement;
const statusDiv = document.getElementById('status') as HTMLParagraphElement;

// 保存设置
const saveOptions = () => {
    const isRedirectEnabled = enableRedirectCheckbox.checked;
    const isNotificationEnabled = enableNotificationsCheckbox.checked;


    chrome.storage.sync.set(
        {
            isRedirectEnabled: isRedirectEnabled,
            isNotificationEnabled: isNotificationEnabled
        },
        () => {
            statusDiv.textContent = '设置已保存。';
            setTimeout(() => {
                statusDiv.textContent = '';
            }, 1500);
        }
    );
};

// 加载设置
const restoreOptions = () => {
    chrome.storage.sync.get(
        {
            isRedirectEnabled: true,
            isNotificationEnabled: true
        },
        (items) => {
            enableRedirectCheckbox.checked = items.isRedirectEnabled;
            enableNotificationsCheckbox.checked = items.isNotificationEnabled;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
enableRedirectCheckbox.addEventListener('change', saveOptions);
enableNotificationsCheckbox.addEventListener('change', saveOptions);