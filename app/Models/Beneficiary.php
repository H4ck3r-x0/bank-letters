<?php

namespace App\Models;

use Alkoumi\LaravelArabicNumbers\Numbers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beneficiary extends Model
{
    use HasFactory;

    protected $fillable = [
        'beneficiary_name',
        'beneficiary_bank',
        'swift_code',
        'amount',
        'currency',
        'account_no',
    ];

    protected $appends = ['amount_in_words'];

    public function getAmountInWordsAttribute()
    {
        return Numbers::TafqeetMoney($this->amount);
    }
}
