<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\VaccinationController;
use App\Http\Controllers\VaccinController;

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


//Route pour les patients

Route::get('/patients', [PatientController::class, 'index'])->name('patients.all');
Route::post('/patients', [PatientController::class, 'store'])->name('patients.store');
Route::get('/patients/{patient}', [PatientController::class, 'show'])->name('patients.show');
Route::put('/patients/{patient}', [PatientController::class, 'update'])->name('patients.update');
Route::delete('/patients/{patient}', [PatientController::class, 'destroy'])->name('patients.destroy');

//Route pour les vaccins



Route::get('/vaccins', [VaccinController::class, 'index'])->name('vaccins.all');
Route::post('/vaccins', [VaccinController::class, 'store'])->name('vaccins.store');
Route::get('/vaccins/{vaccin}', [VaccinController::class, 'show'])->name('vaccins.show');
Route::put('/vaccins/{vaccin}', [VaccinController::class, 'update'])->name('vaccins.update');
Route::delete('/vaccins/{vaccin}', [VaccinController::class, 'destroy'])->name('vaccins.destroy');


// Route pour les vaccination 

Route::get('/vaccinations', [VaccinationController::class, 'index'])->name('vaccinations.all');
Route::post('/vaccinations', [VaccinationController::class, 'store'])->name('vaccinations.store');
Route::get('/vaccinations/{vaccination}', [VaccinationController::class, 'show'])->name('vaccinations.show');
Route::put('/vaccinations/{vaccination}', [VaccinationController::class, 'update'])->name('vaccinations.update');
Route::delete('/vaccinations/{vaccination}', [VaccinationController::class, 'destroy'])->name('vaccinations.destroy');
