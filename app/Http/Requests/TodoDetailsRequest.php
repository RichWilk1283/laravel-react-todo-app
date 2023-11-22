<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "description" => ['required', 'string', 'min:5'],
            "status" => ['required'],
            "timescale" => ['required']
        ];
    }

    public function messages() : array
    {
        return [
          "description.required" => "You must enter a description with at least 5 characters",
          "description.min" => "You must enter a description with at least 5 characters"
        ];
    }
}
