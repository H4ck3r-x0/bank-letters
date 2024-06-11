<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use ArPHP\I18N\Arabic;

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
        $arabic = new Arabic();

        $amountInWords = $arabic->int2str($this->amount);
        $amountInWords = str_replace(' فاصلة ', ' و ', $amountInWords);

        return $amountInWords;
    }
}
