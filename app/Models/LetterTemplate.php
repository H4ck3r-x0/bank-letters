<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LetterTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'directed_to',
        'company_bank_account_id',
    ];

    public function companyBankAccount()
    {
        return $this->belongsTo(CompanyBankAccount::class);
    }
}
