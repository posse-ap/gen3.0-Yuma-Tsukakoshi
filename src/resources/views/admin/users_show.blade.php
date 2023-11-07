<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            ユーザーの個別表示
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-4 p-2 bg-white w-full rounded-2xl">
              <h1 class="p-2 text-lg font-semibold">
                {{ $user->name }}
              </h1>
              <div class="text-right">
                <a href="{{route('users.edit' , $user)}}" class="text-blue-600">
                  <x-primary-button>
                    編集
                  </x-primary-button>
                </a>
                <form method="post" action="{{route('users.destroy', $user)}}" class="flex-2">
                  @csrf
                  @method('delete')
                  <x-primary-button class="ml-2 bg-red-700">
                    削除
                  </x-primary-button>
                </form>
              </div>
              <hr class="w-full">
              <p class="mt-4 p-2">
                {{ $user->email }}
              </p>
            </div>
        </div>
    </div>
</x-app-layout>
