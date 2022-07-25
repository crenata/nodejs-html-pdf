module.exports = ({date, diameters = []}) => {
    const bootstrap = require("./bootstrap.css");
    const logo = require("./logo");
    const imageLeft = require("./image-left");
    const imageRight = require("./image-right");

    let pdfHeaders = "";
    Array.from(Array(2).keys()).forEach((value, index, array) => {
        let page = value + 1;
        pdfHeaders += `
        <div id="pageHeader-${value === 0 ? 'first' : value === array.length - 1 ? 'last' : page}">
            <div class="px-4 py-3">
                <div class="d-flex align-items-center justify-content-between">
                    <p class="m-0 font-size-55-percent opacity-0-6 color-2B2B2B">${date}</p>
                    <p class="m-0 font-size-55-percent opacity-0-6 color-2B2B2B">Page ${page} of ${array.length}</p>
                </div>
            </div>
            <div class="bgc-E9E9E9">
                <div class="px-4 py-2">
                    <div class="row">
                        <div class="col-5">
                            <img src="${logo}" alt="Logo" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Report</title>
    <style>
        ${bootstrap}
        
        html, body {
            font-family: "Roboto";
        }
        
        .color-2B2B2B {
            color: #2B2B2B;
        }
        .color-BBBBBB {
            color: #BBBBBB;
        }
        
        .bgc-E9E9E9 {
            background-color: #E9E9E9;
        }
        .bgc-012369 {
            background-color: #012369;
        }
        .bgc-D0D0D0 {
            background-color: #D0D0D0;
        }
        
        .border-D0D0D0 {
            border: 1px solid #D0D0D0;
        }
        .border-top-D0D0D0 {
            border-top: 1px solid #D0D0D0;
        }
        .border-left-D0D0D0 {
            border-left: 1px solid #D0D0D0;
        }
        
        .opacity-0-6 {
            opacity: 0.6;
        }
        
        .font-size-50-percent {
            font-size: 50%;
        }
        .font-size-55-percent {
            font-size: 55%;
        }
        .font-size-60-percent {
            font-size: 60%;
        }
        .font-size-70-percent {
            font-size: 70%;
        }
        
        .border-radius-5 {
            border-radius: 5px;
        }
        .border-radius-8 {
            border-radius: 8px;
        }
        .border-radius-top-8 {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .border-radius-bottom-8 {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        
        .height-10-rem {
            height: 10rem;
        }
        
        .object-fit-contain {
            object-fit: contain;
        }
        
        tr td:first-child,
        tr td:nth-child(2) {
            vertical-align: top;
        }
        
        .page-break {
            page-break-after: always;
        }
        
        .diameter-section:nth-child(odd) {
            background-color: #F8FAF7;
        }
    </style>
</head>
<body>
    ${pdfHeaders}
    
    <div class="pt-4 mt-5">
        <div class="px-4 py-3">
            <p class="m-0 fw-bold">Report on Measurement</p>
            <div class="bgc-012369 border-radius-5 px-2 py-1 mt-2">
                <p class="m-0 font-size-50-percent text-white">Measurement No : <b>025</b></p>
            </div>
            
            <div class="row mt-2">
                <div class="col-6 pe-3">
                    <img src="${imageLeft}" alt="Image Left" class="w-100 height-10-rem object-fit-contain border-D0D0D0 border-radius-5">
                </div>
                <div class="col-6 ps-3">
                    <img src="${imageRight}" alt="Image Right" class="w-100 height-10-rem object-fit-contain border-D0D0D0 border-radius-5">
                </div>
            </div>
            
            <div class="border-radius-8 border-D0D0D0 mt-2">
                <div class="border-radius-top-8 bgc-D0D0D0 px-2 py-1">
                    <p class="m-0 fw-bold font-size-60-percent">ACTIVITIES & STATUS</p>
                </div>
                <div class="p-2">
                    <table class="w-100">
                        <tbody>
                            <tr>
                                <td width="22%">
                                    <p class="m-0 font-size-50-percent fw-bold">Measurement Added by</p>
                                </td>
                                <td width="4%">
                                    <p class="m-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="m-0 font-size-50-percent">John Doe</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">End Time Added by</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">Sam Smith</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Sync Up by</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">Sam Smith</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Reviewed by</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">Alice Kong</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Status</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">Success</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Comment</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">*Admin to provide comments or the reason of rejecting the trip, and it shows up here...</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="border-radius-8 border-D0D0D0 mt-2">
                <div class="border-radius-top-8 bgc-D0D0D0 px-2 py-1">
                    <p class="m-0 fw-bold font-size-60-percent">MEASUREMENT DETAILS</p>
                </div>
                <div class="p-2">
                    <table class="w-100">
                        <tbody>
                            <tr>
                                <td width="22%">
                                    <p class="m-0 font-size-50-percent fw-bold">Measurement No</p>
                                </td>
                                <td width="4%">
                                    <p class="m-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="m-0 font-size-50-percent">025</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Truck No</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">BM 1234 AB</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Date</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">29/11/2021</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Start Time</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">11:00 AM</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">End Time</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">12:00 PM</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Measurement Location</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">TUK</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Sector</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Concession Block</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent color-BBBBBB">N/A</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Wood Type</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">Acacia Crasicarpa</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="border-radius-8 border-D0D0D0 mt-2">
                <div class="border-radius-top-8 bgc-D0D0D0 px-2 py-1">
                    <p class="m-0 fw-bold font-size-60-percent">LOG CALCULATION</p>
                </div>
                <div class="p-2">
                    <table class="w-100">
                        <tbody>
                            <tr>
                                <td width="22%">
                                    <p class="m-0 font-size-50-percent fw-bold">Height (m)</p>
                                </td>
                                <td width="4%">
                                    <p class="m-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="m-0 font-size-50-percent">1500.00</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Width (m)</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">1300.00</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Wood Count</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">23</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent fw-bold">Volume (cm3)</p>
                                </td>
                                <td width="3%">
                                    <p class="mt-2 mb-0 font-size-50-percent">:</p>
                                </td>
                                <td>
                                    <p class="mt-2 mb-0 font-size-50-percent">90.6</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <div class="page-break"></div>
    
    <div class="pt-4 mt-5">
        <div class="px-4 py-3">
            <p class="m-0 fw-bold">LOG DIAMETERS</p>
            
            <div class="border-radius-8 border-D0D0D0 mt-2">
                <div class="border-radius-top-8 bgc-D0D0D0 px-2 py-1">
                    <div class="row">
                        <div class="col-6">
                            <p class="m-0 fw-bold font-size-60-percent text-center">Diameter (cm)</p>
                        </div>
                        <div class="col-6">
                            <p class="m-0 fw-bold font-size-60-percent text-center">Count</p>
                        </div>
                    </div>
                </div>
    `;

    diameters.forEach(value => {
        html += `
                <div class="px-2 border-top-D0D0D0 diameter-section">
                    <div class="row">
                        <div class="col-6 py-1">
                            <p class="m-0 font-size-60-percent text-center">${value.left}</p>
                        </div>
                        <div class="col-6 py-1 border-left-D0D0D0">
                            <p class="m-0 font-size-60-percent text-center">${value.right}</p>
                        </div>
                    </div>
                </div>        
        `;
    });

    html += `
                <div class="border-radius-bottom-8 bgc-D0D0D0 px-2 py-1">
                    <div class="row">
                        <div class="col-6">
                            <p class="m-0 fw-bold font-size-60-percent text-center">Average</p>
                        </div>
                        <div class="col-6">
                            <p class="m-0 fw-bold font-size-60-percent text-center">235</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    return html;
};
