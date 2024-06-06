<?php

namespace App\Http\Controllers\Letters;

use App\Http\Controllers\Controller;
use App\Models\LetterTemplate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LetterTemplateController extends Controller
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
        return Inertia::render('Letters/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'directed_to' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]);

        LetterTemplate::create($validated);

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
