import React, { Component } from 'react';

function Information()  {
    return (
        <div class="patients-doctors">
            <div class="for-patients">
                <div class="introduction-patients other">
                    <h5 > For patients</h5>
                    <h1 >Find a doctor, book a visit and <br/>solve any health-related doubt</h1>
                    <button class="button">CHOOSE YOUR COUNTRY	</button>
                </div>
                <img class="image-patients" src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
            </div>
            <div class="for-doctors other">
                <h5 >For doctors</h5>
                <h1 >Save time managing visits and <br/>cut no-shows by half</h1>
                <img class="image-doctors" src="https://www.docplanner.com/img/screen-saas@2x.png"/>>

            </div>
        </div>
	);
}

export default Information;