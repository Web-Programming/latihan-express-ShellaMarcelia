import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); //http://localhost:3000/housing
    return await data.json() ??[];
  }

  submitApplication(firstName: String, lastName: String, email: String) {
    const apiUrl = "http://localhost:3000/register";

    const applicationData = {
        firstname: firstName, 
        lastname: lastName,  
        email: email,
    };

    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.message || 'Failed to submit application');
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log('Application submitted successfully:', data);
        })
        .catch((error) => {
            console.error('Error submitting application:', error);
            throw error;
        });
  }
}