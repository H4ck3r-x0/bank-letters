<?php

namespace App\Http\Controllers\Beneficiaries;

use App\Http\Controllers\Controller;
use App\Imports\BeneficiariesImport;
use App\Models\Beneficiary;
use App\Models\LetterTemplate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class BeneficiaryController extends Controller
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
        $beneficiaries = Beneficiary::paginate(10);
        $templates = LetterTemplate::all();

        return Inertia::render('Beneficiaries/Create', [
            'beneficiaries' => $beneficiaries,
            'templates' => $templates,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        foreach ($request->file('excelFiles') as $file) {
            $employees = Excel::toCollection(new BeneficiariesImport, $file);

            foreach ($employees[0] as $employee) {
                Beneficiary::create([
                    'beneficiary_name' => $employee['beneficiary_name'],
                    'beneficiary_bank' => $employee['beneficiary_bank'],
                    'swift_code' => $employee['swift_code'],
                    'amount' => $employee['amount_sar'],
                    'currency' => $employee['currency'],
                    'account_no' => $employee['account_no'],
                ]);
            }
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Beneficiary $beneficiary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beneficiary $beneficiary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Beneficiary $beneficiary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Beneficiary $beneficiary)
    {
        //
    }
}
