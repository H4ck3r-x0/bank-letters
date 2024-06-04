<?php

namespace App\Models;

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
        'letter_content',
    ];
}
