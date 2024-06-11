<?php

use App\Http\Controllers\Beneficiaries\BeneficiaryController;

use App\Http\Controllers\CompanyBank\CompanyBankAccountController;
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

    // Company bank accounts Routes
    Route::get('/company/bank/acount/create', [CompanyBankAccountController::class, 'create'])->name('company.account.create');
    Route::post('/company/bank/acount/store', [CompanyBankAccountController::class, 'store'])->name('company.account.store');

    Route::post('/convert-amount-to-words', [BeneficiaryController::class, 'convertAmountToWords'])->name('convertAmountToWords');
});

require __DIR__ . '/auth.php';
