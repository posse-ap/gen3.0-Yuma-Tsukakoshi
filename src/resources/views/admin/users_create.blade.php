<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            ユーザーの追加
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          @if (session('message'))
              <div class="text-red-500 font-bold">
                {{ session('message') }}
              </div>
          @endif
          <form method="post" action="{{route('users.store')}}">
            @csrf
            <div class="mt-8">
              <div class="w-full flex flex-col">
                <label for="name" class="font-semibold mt-4">名前</label>
                <input type="text" name="language" class="w-auto py-2 border border-gray-300 rounded-md" id="name">
              </div>
            </div>

            <div class="mt-8">
              <div class="w-full flex flex-col">
                <label for="email" class="font-semibold mt-4">メールアドレス</label>
                <input type="text" name="email" class="w-auto p-8 border border-gray-300 rounded-md" id="email">
              </div>
            </div>

            <div class="mt-8">
              <div class="w-full flex flex-col">
                <label for="pass" class="font-semibold mt-4">パスワード</label>
                <input type="password" name="password" class="w-auto p-8 border border-gray-300 rounded-md" id="pass">
              </div>
            </div>

            <x-primary-button class="mt-4">
              送信する
            </x-primary-button>
          </form>
        </div>
    </div>
</x-app-layout>
