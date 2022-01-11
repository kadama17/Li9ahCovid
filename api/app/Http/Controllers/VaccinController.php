<?php

namespace App\Http\Controllers;

use App\Models\Vaccin;
use Illuminate\Http\Request;

class VaccinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $vaccins = Vaccin::all();
        return response()->json($vaccins);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $data['code_vaccin'] = $request['code_vaccin'];
        $data['nom_vaccin'] = $request['nom_vaccin'];
        $data['description'] = $request['description'];
        $data['quantite'] = $request['quantite'];
        $data['date_exp'] = $request['date_exp'];
        $data['nbr_dose'] = $request['nbr_dose'];
    
        Vaccin::create($data);
        return response()->json([
            'message' => "Données enregistrées avec succès",
            'success' => true
        ], 200);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vaccins = Vaccin::find($id);
        return response()->json($vaccins);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vaccin  $vaccin
     * @return \Illuminate\Http\Response
     */
    public function edit(Vaccin $vaccin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */


    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'code_vaccin' => 'required',
            'nom_vaccin' => 'required',
            'description' => 'required',
            'quantite' => 'required',
            'date_exp' => 'required',
            'nbre_dose' => 'required',
          
        ]);

        Vaccin::whereId($id)->update($validatedData);

        return response()->json([
            'message' => 'Vaccin misa à jour!'
        ]);
        return redirect('/');

    }





    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vaccin  $vaccin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vaccin $vaccin)
    {
        $vaccin->delete();
        return response()->json([
            'message' => 'vaccin supprimé'
        ]);
    }
}
