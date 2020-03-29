<?php

use App\Http\Resources\ServerCollection;
use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/server", "ServerController@index");
Route::get("/server/{id}", "ServerController@show");
Route::post("/server", "ServerController@store");
Route::put("/server/{id}", "ServerController@update");
Route::delete("/server/{id}", "ServerController@destroy");
