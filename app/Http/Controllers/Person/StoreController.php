<?php

namespace App\Http\Controllers\Person;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;

class StoreController extends Controller
{

    public function __invoke(StoreRequest $request)
    {
        // $persons = [
        //     [
        //         'id' => 1,
        //         'name' => 'Ivan',
        //         'age' => 15,
        //         'job' => 'the president'

        //     ],
        //     [
        //         'id' => 2,
        //         'name' => 'Katya',
        //         'age' => 37,
        //         'job' => 'teacher'

        //     ],
        //     [
        //         'id' => 3,
        //         'name' => 'Nastya',
        //         'age' => 2,
        //         'job' => 'nety'

        //     ],
        //     [
        //         'id' => 4,
        //         'name' => 'Vovan',
        //         'age' => 54,
        //         'job' => 'Kiber doter'

        //     ],
        //     [
        //         'id' => 5,
        //         'name' => 'Diman',
        //         'age' => 20,
        //         'job' => 'developer'

        //     ],
        // ];
        $data = $request->validated();
        Person::create($data);
        return $data;
    }

}