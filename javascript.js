function doPost(e) {
  try {
    // Logger pour vérifier le contenu de la requête
    Logger.log(e.postData.contents);
    
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById("1kSPVnuZIl0u29waIKOtUcK9l7nxwPeB6l7A_mxJR_PQ").getSheetByName("Sheet1");
    
    // Ajoutez ici une vérification de chaque champ de données
    var numeroIepPatiente = data.numero_iep_patiente || "Non fourni";
    var nomPatiente = data.nom_patiente || "Non fourni";
    var prenomPatiente = data.prenom_patiente || "Non fourni";
    var dateNaissancePatiente = data.date_naissance_patiente || "Non fourni";
    var numeroIepFoetus = data.numero_iep_foetus || "Non fourni";
    var nomFoetus = data.nom_foetus || "Non fourni";
    var prenomFoetus = data.prenom_foetus || "Non fourni";
    var dateNaissanceFoetus = data.date_naissance_foetus || "Non fourni";
    var poidsPatiente = data.poids_patiente || "Non fourni";
    var taillePatiente = data.taille_patiente || "Non fourni";
    var imcPatiente = data.imc_patiente || "Non fourni";
    var gestite = data.gestite || "Non fourni";
    var parite = data.parite || "Non fourni";
    var fcs = data.fcs || "Non fourni";
    var pathologieHemorragiqueConstitutionnelle = data.pathologie_hemorragique_constitutionnelle || "Non fourni";
    var etiologiePathologie = data.etiologie_pathologie || "Non fourni";
    var purpuraThrombopenieIdiopathique = data.purpura_thrombopenie_idiopathique || "Non fourni";
    var alloimmunisationPlaquettaire = data.alloimmunisation_plaquettaire || "Non fourni";
    var typeAlloimmunisation = data.type_alloimmunisation || "Non fourni";
    var atcdImg = data.atcd_img || "Non fourni";
    var raisonImg = data.raison_img || "Non fourni";
    var atcdMiu = data.atcd_miu || "Non fourni";
    var etiologieMiu = data.etiologie_miu || "Non fourni";
    var hyperemeseGravidique = data.hyperemese_gravidique || "Non fourni";
    var hypovitaminoseK = data.hypovitaminose_k || "Non fourni";
    var medicamentRisqueHemorragique = data.medicament_risque_hemorragique || "Non fourni";
    var medicamentNom = data.medicament_nom || "Non fourni";
    var pathologieHemorragiqueFamiliale = data.pathologie_hemorragique_familiale || "Non fourni";
    var etiologiePathologieFamiliale = data.etiologie_pathologie_familiale || "Non fourni";
    var purpuraThrombopenieIdiopathiqueFam = data.purpura_thrombopenie_idiopathique_fam || "Non fourni";
    var maladieHemorragiqueFamiliale = data.maladie_hemorragique_familiale || "Non fourni";
    var maladieHemorragiqueFamilialeDetail = data.maladie_hemorragique_familiale_detail || "Non fourni";
    var dateDebutGrossesse = data.date_debut_grossesse || "Non fourni";
    var typeGrossesse = data.type_grossesse || "Non fourni";
    var preEclampsie = data.pre_eclampsie || "Non fourni";
    var autrePathologie = data.autre_pathologie || "Non fourni";
    var ageGestationnelDecouverte = data.age_gestationnel_decouverte || "Non fourni";
    var typeAnomalieCerebrale = data.type_anomalie_cerebrale || "Non fourni";
    var stadeLesionCerebrale = data.stade_lesion_cerebrale || "Non fourni";
    var pagRciu = data.pag_rciu || "Non fourni";
    var cnT1 = data.cn_t1 || "Non fourni";
    var autresSignes = data.autres_signes || "Non fourni";
    var irm = data.irm || "Non fourni";
    var ageGestationnelRealisationIrm = data.age_gestationnel_realisation_irm || "Non fourni";
    var typeAnomalieCerebraleIrm = data.type_anomalie_cerebrale_irm || "Non fourni";
    var stadeLesionCerebraleIrm = data.stade_lesion_cerebrale_irm || "Non fourni";
    var autresSignesIrm = data.autres_signes_irm || "Non fourni";
    var hemorragieAntenatal = data.hemorragie_antenatal || "Non fourni";
    var amniocentese = data.amniocentese || "Non fourni";
    var pourquoiAmniocenteseNon = data.pourquoi_amniocentese_non || "Non fourni";
    var cgh = data.cgh || "Non fourni";
    var cghEtiologie = data.cgh_etiologie || "Non fourni";
    var rechercheMoleculaire = data.recherche_moleculaire || "Non fourni";
    var rechercheMoleculaireDetail = data.recherche_moleculaire_detail || "Non fourni";
    var resultatMoleculaire = data.resultat_moleculaire || "Non fourni";
    var bilanInfectieux = data.bilan_infectieux || "Non fourni";
    var alloimmunisationPlaquettaireResultat = data.alloimmunisation_plaquettaire_resultat || "Non fourni";
    var alloimmunisationType = data.alloimmunisation_type || "Non fourni";
    var etatNaissance = data.etat_naissance || "Non fourni";
    var terme = data.terme || "Non fourni";
    var poidsNaissance = data.poids_naissance || "Non fourni";
    var tailleNaissance = data.taille_naissance || "Non fourni";
    var perimetreCranien = data.perimetre_cranien || "Non fourni";
    var img = data.img || "Non fourni";
    var isg = data.isg || "Non fourni";
    var miu = data.miu || "Non fourni";
    var ageGestationnelIncident = data.age_gestationnel_incident || "Non fourni";
    var particulariteClinique = data.particularite_clinique || "Non fourni";
    var particulariteCliniqueDetail = data.particularite_clinique_detail || "Non fourni";
    var autres = data.autres || "Non fourni";
    var rechercheAlloimmunisationParents = data.recherche_alloimmunisation_parents || "Non fourni";
    var rechercheAlloimmunisationParentsResultat = data.recherche_alloimmunisation_parents_resultat || "Non fourni";
    var rechercheAlloimmunisationEnfant = data.recherche_alloimmunisation_enfant || "Non fourni";
    var rechercheAlloimmunisationEnfantResultat = data.recherche_alloimmunisation_enfant_resultat || "Non fourni";
    var numerationPlaquettaire = data.numeration_plaquettaire || "Non fourni";
    var numerationPlaquettaireResultat = data.numeration_plaquettaire_resultat || "Non fourni";
    var etf = data.etf || "Non fourni";
    var etfResultat = data.etf_resultat || "Non fourni";
    var irmResultat = data.irm_resultat || "Non fourni";
    var lesionCerebraleClassificationPriva = data.lesion_cerebrale_classification_priva || "Non fourni";
    var foetopathologie = data.foetopathologie || "Non fourni";
    var foetopathologieResultat = data.foetopathologie_resultat || "Non fourni";
    var conseilGenetique = data.conseil_genetique || "Non fourni";
    var diagnosticFinal = data.diagnostic_final || "Non fourni";
    var etiologieFinale = data.etiologie_finale || "Non fourni";
    var etiologieFinaleDetail = data.etiologie_finale_detail || "Non fourni";

    sheet.appendRow([
      numeroIepPatiente, nomPatiente, prenomPatiente, dateNaissancePatiente, numeroIepFoetus, nomFoetus, prenomFoetus, dateNaissanceFoetus,
      poidsPatiente, taillePatiente, imcPatiente, gestite, parite, fcs, pathologieHemorragiqueConstitutionnelle, etiologiePathologie,
      purpuraThrombopenieIdiopathique, alloimmunisationPlaquettaire, typeAlloimmunisation, atcdImg, raisonImg, atcdMiu, etiologieMiu,
      hyperemeseGravidique, hypovitaminoseK, medicamentRisqueHemorragique, medicamentNom, pathologieHemorragiqueFamiliale, etiologiePathologieFamiliale,
      purpuraThrombopenieIdiopathiqueFam, maladieHemorragiqueFamiliale, maladieHemorragiqueFamilialeDetail,       dateDebutGrossesse, typeGrossesse, preEclampsie, autrePathologie, ageGestationnelDecouverte, typeAnomalieCerebrale, stadeLesionCerebrale,
      pagRciu, cnT1, autresSignes, irm, ageGestationnelRealisationIrm, typeAnomalieCerebraleIrm, stadeLesionCerebraleIrm, autresSignesIrm,
      hemorragieAntenatal, amniocentese, pourquoiAmniocenteseNon, cgh, cghEtiologie, rechercheMoleculaire, rechercheMoleculaireDetail,
      resultatMoleculaire, bilanInfectieux, alloimmunisationPlaquettaireResultat, alloimmunisationType, etatNaissance, terme,
      poidsNaissance, tailleNaissance, perimetreCranien, img, isg, miu, ageGestationnelIncident, particulariteClinique, particulariteCliniqueDetail,
      autres, rechercheAlloimmunisationParents, rechercheAlloimmunisationParentsResultat, rechercheAlloimmunisationEnfant,
      rechercheAlloimmunisationEnfantResultat, numerationPlaquettaire, numerationPlaquettaireResultat, etf, etfResultat, irmResultat,
      lesionCerebraleClassificationPriva, foetopathologie, foetopathologieResultat, conseilGenetique, diagnosticFinal, etiologieFinale,
      etiologieFinaleDetail
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

