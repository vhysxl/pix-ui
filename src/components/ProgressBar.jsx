export function PinkProgressBar({ progress = 0 }) {
    // Memastikan angka progress tetap berada di antara 0 dan 100
    const validatedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <div style={{
            width: '100%',
            maxWidth: '350px',
            height: '16px',
            backgroundColor: '#FFF0F5', // Latar belakang dasar bar (Lavender Blush / Pink sangat pucat)
            borderRadius: '50px', // Membuat sudut bar benar-benar bulat halus
            overflow: 'hidden', // Memastikan isian di dalam tidak keluar dari batas melengkung
            border: '2px solid #FFB6C1', // Garis pinggir penegas warna Light Pink
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.06)' // Efek bayangan ke dalam agar terkesan 3D halus
        }}>
            {/* Bagian pengisi yang bergerak maju */}
            <div style={{
                width: `${validatedProgress}%`, // Lebar diatur dinamis berdasarkan isi prop
                height: '100%',
                backgroundImage: 'linear-gradient(90deg, #FFB6C1, #FF69B4)', // Gradasi warna pink manis dari muda ke terang
                borderRadius: '50px',
                // Efek transisi yang membuat pergerakan pengisian terasa mulus dan mengalir (ease-out)
                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
            }} />
        </div>
    );
}