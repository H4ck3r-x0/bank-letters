<?php

use App\Http\Controllers\Beneficiaries\BeneficiaryController;
use App\Http\Controllers\Letters\LetterController;
use App\Http\Controllers\Letters\LetterTemplateController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // User Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // Beneficiary Routes
    Route::get('/beneficiary/create', [BeneficiaryController::class, 'create'])->name('beneficiary.create');
    Route::post('/beneficiary/store', [BeneficiaryController::class, 'store'])->name('beneficiary.store');

    // Letters Routes
    Route::get('/letter/create', [LetterTemplateController::class, 'create'])->name('letter.create');
    Route::post('/letter/store', [LetterTemplateController::class, 'store'])->name('letter.store');
});

require __DIR__ . '/auth.php';
