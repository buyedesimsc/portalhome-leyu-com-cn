function appendSiteHelper() {
  const base = document.createElement('div');
  base.id = 'site-helper-root';
  base.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;font-family:sans-serif;';

  const toggle = document.createElement('button');
  toggle.textContent = '帮助';
  toggle.style.cssText = 'background:#1e3c72;color:white;border:none;padding:8px 14px;border-radius:20px;cursor:pointer;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,0.2);';
  base.appendChild(toggle);

  const panel = document.createElement('div');
  panel.style.cssText = 'display:none;margin-top:10px;background:white;border-radius:12px;padding:16px;width:280px;box-shadow:0 6px 20px rgba(0,0,0,0.25);border:1px solid #d0d7de;';
  panel.innerHTML = createPanelContent();
  base.appendChild(panel);

  toggle.addEventListener('click', () => {
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  });

  document.body.appendChild(base);
}

function createPanelContent() {
  const keywords = ['乐鱼体育', '体育资讯', '赛事推荐', '安全入口', 'VIP通道'];
  const url = 'https://portalhome-leyu.com.cn';

  const badge = (text) => `<span style="display:inline-block;background:#e6f0ff;color:#1a4a8b;border-radius:12px;padding:2px 10px;margin:3px 4px;font-size:12px;font-weight:500;">${text}</span>`;

  const card = `
    <div style="background:#f6f8fa;border-radius:8px;padding:12px;margin-bottom:10px;">
      <div style="font-size:14px;font-weight:600;color:#1e3c72;">📌 页面提示</div>
      <div style="font-size:13px;color:#333;margin-top:4px;">当前页面为 <strong>乐鱼体育</strong> 官方辅助入口，请通过下方地址访问主站。</div>
    </div>
    <div style="background:#fff3cd;border-radius:8px;padding:10px;margin-bottom:10px;border-left:4px solid #ffc107;">
      <div style="font-size:12px;color:#856404;">🔗 访问地址</div>
      <div style="font-size:13px;word-break:break-all;color:#1a4a8b;"><a href="${url}" target="_blank" style="color:#1a4a8b;text-decoration:underline;">${url}</a></div>
    </div>
    <div style="margin-top:8px;">
      <div style="font-size:12px;color:#666;margin-bottom:4px;">🏷️ 关键词徽章</div>
      <div>${keywords.map(k => badge(k)).join('')}</div>
    </div>
    <div style="margin-top:12px;padding-top:10px;border-top:1px solid #e1e4e8;font-size:12px;color:#888;">
      ⚠️ 说明：本工具仅提供访问提示，不收集任何信息。请认准官方域名。
    </div>
  `;

  return card;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', appendSiteHelper);
} else {
  appendSiteHelper();
}