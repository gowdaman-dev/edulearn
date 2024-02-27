'use client'
import React from 'react'
import { motion } from 'framer-motion'
function LoaderPage() {
    return (
        <div className='fixed z-[10] top-0 left-0 h-screen w-screen bg-[--web-container] grid place-items-center' >
            <motion.svg width="213" height="156" viewBox="0 0 213 156" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
                <motion.path
                    animate={{ strokeWidth: 2, pathLength: [0, 1, 0] }} transition={{ duration: 4, ease: 'circInOut', repeat: Infinity }} d="M197.3 19.1319C189.216 9.11372 178.457 3.10349 167.047 2.23231C155.638 1.36112 144.365 5.68904 135.35 14.4016C127.119 6.4738 116.991 2.16912 106.567 2.16662C96.142 2.16411 86.0138 6.46394 77.7793 14.3877C68.3881 5.25323 56.5384 0.906369 44.6493 2.23459C32.7602 3.5628 21.7284 10.4659 13.8061 21.5347C5.88375 32.6034 1.66832 47.003 2.0204 61.7938C2.37249 76.5845 7.26552 90.6514 15.7006 101.121L44.5074 136.835C44.5297 136.862 44.552 136.888 44.5771 136.915C44.6022 136.943 44.6092 136.956 44.6252 136.976C44.6552 137.013 44.6873 137.047 44.7172 137.084C45.1751 137.646 45.6399 138.193 46.1117 138.726C46.3544 139.002 46.5998 139.269 46.8466 139.538C47.047 139.754 47.2482 139.968 47.4505 140.18C55.6621 148.805 66.0182 153.664 76.7788 153.941C87.5401 154.218 98.0497 149.897 106.544 141.702C115.558 150.414 126.831 154.742 138.24 153.871C149.65 153 160.409 146.99 168.493 136.971L197.301 101.263C206.074 90.3636 211.001 75.5947 211.001 60.1973C211.001 44.8 206.074 30.0316 197.3 19.1319ZM106.558 17.2926C113.407 17.2872 120.103 19.8006 125.799 24.5148C131.495 29.2289 135.935 35.9318 138.556 43.7751C141.178 51.6184 141.863 60.2495 140.526 68.5758C139.189 76.9023 135.889 84.5497 131.043 90.5502L106.558 120.902L82.0709 90.5502C77.2257 84.5497 73.9256 76.9022 72.5883 68.5756C71.2509 60.2491 71.9364 51.618 74.558 43.7747C77.1797 35.9313 81.6198 29.2285 87.3156 24.5144C93.0121 19.8004 99.7085 17.287 106.558 17.2926ZM43.1205 95.9071C43.1081 90.2676 43.9982 84.6815 45.7392 79.4715C47.4802 74.2616 50.0377 69.5314 53.2634 65.5548L59.7806 57.4763C59.4651 65.5512 60.5163 73.6187 62.8668 81.1599C65.2173 88.7006 68.815 95.5485 73.4285 101.263L97.4138 130.995C92.2403 135.487 86.1714 138.132 79.8683 138.642C73.5659 139.152 67.2706 137.508 61.6698 133.889C56.0691 130.268 51.3774 124.813 48.1062 118.114C44.8351 111.417 43.1101 103.734 43.1191 95.9045L43.1205 95.9071ZM24.3416 90.4076C18.2124 82.8119 14.6042 72.6429 14.2297 61.9097C13.8552 51.1764 16.7416 40.6593 22.3188 32.4359C27.8959 24.2125 35.7583 18.8809 44.3527 17.4941C52.9471 16.1073 61.6485 18.7664 68.7381 24.946L44.621 54.841C40.2569 60.2214 36.797 66.6213 34.4416 73.6703C32.0863 80.7193 30.8822 88.2774 30.8992 95.9071C30.8992 96.8077 30.9161 97.7049 30.9501 98.5994L24.3416 90.4076ZM135.366 138.831C128.291 138.851 121.384 136.165 115.586 131.138L139.689 101.263C144.303 95.5485 147.9 88.7006 150.251 81.1597C152.601 73.6186 153.652 65.5512 153.337 57.4763L159.854 65.5548C164.698 71.5581 167.995 79.2067 169.331 87.5333C170.667 95.8596 169.981 104.49 167.36 112.334C164.739 120.177 160.3 126.881 154.606 131.597C148.91 136.314 142.215 138.831 135.366 138.831ZM188.659 90.5502L182.166 98.5994C182.198 97.7057 182.215 96.8086 182.217 95.9071C182.233 88.2774 181.029 80.7192 178.674 73.6702C176.319 66.6212 172.858 60.2214 168.494 54.841L144.394 24.9658C151.496 18.8396 160.191 16.2313 168.767 17.6545C177.344 19.0777 185.179 24.4293 190.731 32.6556C196.284 40.8818 199.15 51.3866 198.766 62.1018C198.383 72.8169 194.777 82.9658 188.659 90.5502Z" stroke="#007bff" strokeWidth="2" />
            </motion.svg>
            <h1 className='absolute pb-10 text-sm font-light text-[--web-primary-color]'>loading</h1>
        </div>
    )
}

export default LoaderPage