<?php

namespace App\Http\Controllers\CompanyBank;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\LetterTemplate;
use App\Models\CompanyBankAccount;
use App\Http\Controllers\Controller;

class CompanyBankAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CompanyBank/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'directed_to' => ['required', 'string', 'max:255'],
            'account_number' => ['required', 'string'],
        ]);

        $bank_acount = CompanyBankAccount::create([
            'account_number' => $validated['account_number'],
        ]);

        LetterTemplate::create([
            'directed_to' => $validated['directed_to'],
            'company_bank_account_id' => $bank_acount->id,
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(LetterTemplate $letterTemplate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LetterTemplate $letterTemplate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LetterTemplate $letterTemplate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LetterTemplate $letterTemplate)
    {
        //
    }
}
