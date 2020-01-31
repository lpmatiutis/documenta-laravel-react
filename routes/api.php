<?php

use Illuminate\Http\Request;

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

Route::get('/test', 'Test\testController@test');
Route::get('/facturador', 'Test\testController@getFacturador');
Route::get('/facturadorEager', 'Test\testController@getFact'); //getEntidad
Route::get('/entidadEager', 'Test\testController@getEntidad'); //getEntidad
Route::get('/getMoneda', 'reddpago\monedaController@getMoneda'); //getEntidad
Route::get('/getServicioApi', 'reddpago\ServicioApiController@getServicioApi'); //getEntidad
Route::get('/getPersona', 'reddpago\PersonaController@getPersona'); //getEntidad
Route::get('/getCliente', 'reddpago\ClienteController@getCliente'); //getEntidad
Route::get('/getServicio', 'reddpago\ServicioController@getServicio'); //getEntidad

/*
Pruebas para integrar laravel con react
*/
Route::get('/getTipoZona', 'reddpago\TipoZonaController@index'); //obtener las zonas
Route::get('/getTipoZona/{id}', 'reddpago\TipoZonaController@show'); //obtener zona por id
Route::post('/TipoZona', 'reddpago\TipoZonaController@create'); //insertar nueva zona
Route::put('/TipoZona/{id}', 'reddpago\TipoZonaController@update'); //actualizar zona
Route::delete('/TipoZona/{id}', 'reddpago\TipoZonaController@delete');

Route::get('/getServicioApiAll', 'reddpago\ServicioApiController@getAllServicioApi'); 

Route::get('/ServicioRc', 'redcobrosjp\ServicioRcController@getServicioRc');
Route::get('/ServicioRc/{id}', 'redcobrosjp\ServicioRcController@getServicioRcId');

Route::get('/LogConsultas', 'redcobrosjp\LogConsultasController@getLogConsultas');
Route::get('/LogConsultas/{id}', 'redcobrosjp\LogConsultasController@getLogConsultasId');

