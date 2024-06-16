        // 获取IP地理位置的函数
        async function getIPGeolocation() {
            try {
                const response = await fetch('https://ipinfo.io/json?token=b5db35938ca99e');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('获取IP地理位置时出错:', error);
                return null;
            }
        }

        // 检查IP是否来自中国大陆的函数
        async function checkIPFromChina() {
            const geolocationData = await getIPGeolocation();
            if (geolocationData) {
                const countryCode = geolocationData.country;
                if (countryCode === 'CN') {
                    document.getElementById('warning-box').innerHTML = '<div class="warning-box"> <strong>警告：</strong> 我们注意到您正在尝试访问托管于 GitHub Pages 的网页。由于网络限制和其他不可控因素，中国大陆地区的用户在访问 GitHub Pages 时可能会遇到速度极慢的情况，甚至可能无法访问。我们建议您耐心等待，或尝试使用其他网络环境（如 VPN ）进行访问。感谢您的理解与合作。</div>';
                }
        }
        }
        checkIPFromChina();