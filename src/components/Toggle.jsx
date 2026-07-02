import { useState } from 'react';

export function PinkToggle({ onToggleChange }) {
    const [isOn, setIsOn] = useState(false);

    const handleContainerClick = () => {
        const nextState = !isOn;
        setIsOn(nextState);
        
        // Mengirimkan status terbaru (true/false) ke komponen induk jika dibutuhkan
        if (onToggleChange) {
            onToggleChange(nextState);
        }
    };

    return (
        <div 
            onClick={handleContainerClick}
            style={{
                width: '60px',
                height: '32px',
                backgroundColor: isOn ? '#FF69B4' : '#E0E0E0', // Berubah jadi Hot Pink jika aktif, abu-abu jika mati
                borderRadius: '50px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease', // Transisi perubahan warna latar yang halus
                boxShadow: isOn ? '0 0 10px rgba(255, 105, 180, 0.5)' : 'none', // Efek glowing saat aktif
                display: 'inline-block'
            }}
        >
            {/* Bulatan kecil di dalam sakelar (Knob) */}
            <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#FFF',
                borderRadius: '50%',
                position: 'absolute',
                top: '4px',
                // Logika pergeseran posisi: pindah ke kanan (32px) jika aktif, kembali ke kiri (4px) jika mati
                left: isOn ? '32px' : '4px', 
                // Efek transisi pergeseran yang memiliki sedikit efek pegas/memantul (cubic-bezier)
                transition: 'left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }} />
        </div>
    );
}