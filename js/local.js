/*
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Projet    : hottineric.free.fr                                                                   //
// Version   : 1.23 (28/04/2015)                                                                    //
// Page      : local.js                                                                             //
// Role      : fonction JavaScript locale of the web site                                           //
// Language  : JavaScript                                                                           //
// Auteur(s) : HOTTIN Eric (Based on Aerial by HTML5 UP)                                            //
//             html5up.net | @n33co                                                                 //
//             Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) //
// Creation  : 30/11/2020                                                                           //
// Modif le  :                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////
*/

function affichage_copyright(depuis)
{
    var maintenant = new Date();
    var annee = maintenant.getFullYear();
    document.write('&copy;&nbsp;' + depuis + '-' + annee);
}