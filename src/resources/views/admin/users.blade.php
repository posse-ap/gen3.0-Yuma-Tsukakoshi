<x-app-layout>
  <x-slot name="header">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          ユーザー
      </h2>
  </x-slot>

  <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          @if (session('message'))
            <div class="text-red-600 font-bold">
              {{ session('message') }}
            </div>
          @endif
          @foreach ($users as $user)
              <div class="mt-4 p-2 bg-white w-full rounded-2xl">
                <h1 class="p-2 text-lg font-semibold">
                  <a href="{{route('users.show' , $user)}}" class="text-blue-600">
                    {{ $user->name }}
                  </a>
                </h1>
                <hr class="w-full">
                <p class="mt-4 p-2">
                  {{ $user->email }}
                </p>
              </div>
          @endforeach
        </div>
    </div>
</x-app-layout>
