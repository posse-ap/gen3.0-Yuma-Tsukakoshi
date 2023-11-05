<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            学習言語の編集
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          @if (session('message'))
              <div class="text-red-500 font-bold">
                {{ session('message') }}
              </div>
          @endif
          <form method="post" action="{{route('languages.update', $language)}}">
            @csrf
            @method('patch')
            <div class="mt-8">
              <div class="w-full flex flex-col">
                <label for="name" class="font-semibold mt-4">言語名</label>
                <input type="text" name="language" class="w-auto py-2 border border-gray-300 rounded-md" id="name" value="{{old('name', $language->language)}}">
              </div>
            </div>

            <div class="mt-8">
              <div class="w-full flex flex-col">
                <label for="color" class="font-semibold mt-4">色</label>
                <input type="color" name="color" class="w-auto p-8 border border-gray-300 rounded-md" id="color"  value="{{old('color', $language->color)}}">
              </div>
            </div>

            <x-primary-button class="mt-4">
              送信する
            </x-primary-button>
          </form>
        </div>
    </div>
</x-app-layout>
