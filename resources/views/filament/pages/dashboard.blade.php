<x-filament-panels::page>
    @php
    $menuCards = [
    [
    'title' => 'Kelas 10',
    'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
    </svg>',
    'link' => 'https://youtube.com'
    ],
    [
    'title' => 'Kelas 11',
    'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>',
    'link' => '#'
    ],
    [
    'title' => 'Menu 3',
    'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>',
    'link' => '#'
    ],
    [
    'title' => 'Menu 4',
    'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 7.464" />
    </svg>',
    'link' => '#'
    ],
    ];
    @endphp

    <!-- Header -->
    <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Selamat Datang di Dashboard Home</h1>
        <p class="text-gray-600">Berikut adalah ringkasan aktivitas dan informasi penting Anda hari ini.</p>
    </div>

    <!-- Menu Cards -->
    <div class="flex flex-wrap gap-4">
        @foreach ($menuCards as $card)
        <a href="{{ $card['link'] }}"
            class="flex-1 p-4 text-center transition-all transform border border-blue-500 rounded-lg shadow hover:scale-105">
            <div class="flex justify-center mb-2">
                {!! $card['icon'] !!}
            </div>
            <div class="text-sm font-medium text-gray-800">
                {{ $card['title'] }}
            </div>
        </a>
        @endforeach
    </div>

    <!-- Overview Section -->
    <div class="mt-8">
        <h2 class="text-xl font-bold text-gray-800">Overview</h2>
        <p class="mt-2 text-gray-600">
            Dashboard ini memberikan gambaran umum mengenai aktivitas terbaru, statistik pengguna, dan notifikasi
            penting. Silahkan eksplorasi lebih lanjut melalui menu di atas.
        </p>
    </div>

    <!-- Statistik dan Laporan -->
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-4 border border-blue-500 rounded shadow">
            <h3 class="mb-2 text-lg font-bold">Statistik Pengguna</h3>
            <p>Total pengguna: <strong>1.234</strong></p>
            <p>Pendaftar baru: <strong>56</strong></p>
        </div>
        <div class="p-4 border border-blue-500 rounded shadow">
            <h3 class="mb-2 text-lg font-bold">Aktivitas Terakhir</h3>
            <p>Login terakhir: <strong>10 menit yang lalu</strong></p>
            <p>Update profil: <strong>1 jam yang lalu</strong></p>
        </div>
        <div class="p-4 border border-blue-500 rounded shadow">
            <h3 class="mb-2 text-lg font-bold">Laporan</h3>
            <p>Laporan baru: <strong>5</strong></p>
            <p>Laporan bulan ini: <strong>20</strong></p>
        </div>
    </div>

    <!-- Notifikasi -->
    <div class="mt-8">
        <h2 class="text-xl font-bold text-gray-800">Notifikasi</h2>
        <ul class="mt-2 ml-5 text-gray-600 list-disc">
            <li>Notifikasi dummy 1: Tugas baru telah diupload.</li>
            <li>Notifikasi dummy 2: Jadwal pelajaran diperbarui.</li>
            <li>Notifikasi dummy 3: Peringatan keamanan sistem.</li>
        </ul>
    </div>
</x-filament-panels::page>