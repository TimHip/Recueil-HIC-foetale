function doPost(e) {
  var data;
  
  try {
    data = JSON.parse(e.postData.contents);
    Logger.log(data);
  } catch (error) {
    Logger.log("Error parsing JSON: " + error.message);
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "message": "Invalid JSON"}))
                          .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var sheet = SpreadsheetApp.openById("1LNFWgVglhmlKF4wJ_0C1ne7sS69OM9qHoKDnGS8T9YI").getSheetByName("Recueil HIC (provisoire)");
    Logger.log(sheet.getName());
    sheet.appendRow([
      data.numero_iep_patiente, data.nom_patiente, data.prenom_patiente, data.date_naissance_patiente,
      data.numero_iep_foetus, data.nom_foetus, data.prenom_foetus, data.date_naissance_foetus,
      data.poids_patiente, data.taille_patiente, data.imc_patiente, data.gestite, data.parite, data.fcs,
      data.pathologie_hemorragique_constitutionnelle, data.etiologie_pathologie
      data.purpura_thrombopenie_idiopathique, data.alloimmunisation_plaquettaire, data.type_alloimmunisation,
      data.atcd_img, data.raison_img, data.atcd_miu, data.etiologie_miu, data.hyperemese_gravidique,
      data.hypovitaminose_k, data.medicament_risque_hemorragique, data.medicament_nom,
      data.pathologie_hemorragique_familiale, data.etiologie_pathologie_familiale, data.purpura_thrombopenie_idiopathique_fam,
      data.maladie_hemorragique_familiale, data.maladie_hemorragique_familiale_detail,
      data.date_debut_grossesse, data.type_grossesse, data.pre_eclampsie, data.autre_pathologie,
      data.age_gestationnel_decouverte, data.type_anomalie_cerebrale, data.stade_lesion_cerebrale,
      data.pag_rciu, data.cn_t1, data.autres_signes, data.irm, data.age_gestationnel_realisation_irm,
      data.type_anomalie_cerebrale_irm, data.stade_lesion_cerebrale_irm, data.autres_signes_irm,
      data.hemorragie_antenatal, data.amniocentese, data.pourquoi_amniocentese_non, data.cgh,
      data.cgh_etiologie, data.recherche_moleculaire, data.recherche_moleculaire_detail, data.resultat_moleculaire,
      data.bilan_infectieux, data.alloimmunisation_plaquettaire_resultat,
      data.alloimmunisation_type, data.etat_naissance, data.terme, data.poids_naissance, data.taille_naissance,
      data.perimetre_cranien, data.img, data.isg, data.miu, data.age_gestationnel_incident,
      data.particularite_clinique, data.particularite_clinique_detail, data.autres,
      data.recherche_alloimmunisation_parents, data.recherche_alloimmunisation_parents_resultat,
      data.recherche_alloimmunisation_enfant, data.recherche_alloimmunisation_enfant_resultat,
      data.numeration_plaquettaire, data.numeration_plaquettaire_resultat, data.etf, data.etf_resultat,
      data.irm_resultat, data.lesion_cerebrale_classification_priva, data.foetopathologie,
      data.foetopathologie_resultat, data.conseil_genetique, data.diagnostic_final, data.etiologie_finale,
      data.etiologie_finale_detail
    ]);
  } catch (error) {
    Logger.log("Error accessing or writing to the sheet: " + error.message);
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "message": "Error accessing or writing to the sheet"}))
                          .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
                        .setMimeType(ContentService.MimeType.JSON);
}
