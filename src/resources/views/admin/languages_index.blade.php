<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            学習言語の一覧
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          @foreach ($languages as $language)
              <div class="mt-4 p-2 bg-white w-full rounded-2xl">
                <h1 class="p-2 text-lg font-semibold">
                  {{ $language->language }}
                </h1>
                <hr class="w-full">
                <p class="mt-4 p-2">
                  {{ $language->color }}
                </p>
              </div>
          @endforeach
        </div>
    </div>
</x-app-layout>
