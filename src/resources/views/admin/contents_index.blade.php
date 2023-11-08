<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            学習コンテンツの一覧
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          @if (session('message'))
              <div class="text-red-600 font-bold">
                {{ session('message') }}
              </div>
          @endif
          @foreach ($contents as $content)
              <div class="mt-4 p-2 bg-white w-full rounded-2xl">
                <h1 class="p-2 text-lg font-semibold">
                  <a href="{{route('contents.show' , $content)}}" class="text-blue-600">
                    {{ $content->content }}
                  </a>
                </h1>
                <hr class="w-full">
                <p class="mt-4 p-2">
                  {{ $content->color }}
                </p>
              </div>
          @endforeach
          <a href="{{route('contents.create')}}" class="text-blue-600">
            <x-primary-button>
              新規作成
            </x-primary-button>
          </a>
        </div>
    </div>
</x-app-layout>
