# CMS Medpoint System
repository ini adalah repository setup prohect medpoint sistem untuk cms/web application. Ini adalah setup project yang menggunakan teknology reactJs dan typeScript. pada project ini saya menggunakan vite untuk membuat project karena performanya lebih cepat dari pada create-react-app. untuk database, saya telah mengkoneksikannya dengan supabase cloud.

## teknologi
- Language -> TypeScript
- Framework -> ReactJs
- Database -> Supabase cloud

## struktur folder
- CMS-IP-medpoint/
- ├── public/                   # Berisi file yang akan dipublikasikan secara langsung
- │   └── index.html            # Template HTML utama
- ├── src/                      # Semua kode sumber aplikasi
- │   ├── assets/               # File aset seperti gambar, font, dll.
- │   │   └── logo.svg          # Contoh file aset
- │   ├── components/           # Komponen-komponen React yang dapat digunakan ulang
- │   ├── pages/                # Komponen halaman
- │   │   └── Home.tsx          # Halaman utama (contoh)
- │   ├── store/                # State management (misalnya Redux, Zustand, atau Context API)
- │   ├── utils/                # Fungsi utilitas yang dapat digunakan ulang
- │   │   └── supabaseConfig.ts # utilitas untuk connection ke supabase
- │   ├── App.tsx               # Komponen root aplikasi
- │   ├── main.tsx              # Entry point aplikasi React (render React ke DOM)
- │   └── vite-env.d.ts         # File deklarasi tipe untuk Vite
- ├── .gitignore                # Daftar file dan folder yang diabaikan oleh Git
- ├── index.html                # Template HTML utama
- ├── tsconfig.json             # Konfigurasi TypeScript
- ├── vite.config.ts            # Konfigurasi Vite
- ├── package.json              # Manajer dependensi proyek
- └── README.md                 # Dokumentasi proyek
