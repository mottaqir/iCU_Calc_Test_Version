/* iCU Calc — app logic. Extracted verbatim from index.html (4 former inline <script> blocks, original execution order kept).
   Loaded at the very end of <body>, exactly where the largest block used to sit. */


/* ═══ chunk 1/4 (was inline <script> at index.html line 6751) ═══ */
function eiwSwitchK(which){
  const panelHyper = document.getElementById('eiw-panel-hyper');
  const panelHypo = document.getElementById('eiw-panel-hypo');
  const tabHyper = document.getElementById('eiw-tab-hyper');
  const tabHypo = document.getElementById('eiw-tab-hypo');
  const icon = document.getElementById('eiw-k-icon');
  const subtitle = document.getElementById('eiw-k-subtitle');

  if(which === 'hyper'){
    panelHyper.classList.add('eiw-visible');
    panelHypo.classList.remove('eiw-visible');
    tabHyper.classList.add('eiw-active-hyper');
    tabHypo.classList.remove('eiw-active-hypo');
    icon.style.background = 'var(--sp-danger-bg)';
    icon.style.borderColor = 'var(--sp-danger-border)';
    icon.style.color = 'var(--sp-danger-text)';
    subtitle.textContent = 'Hyperkalemia • UKKA 2023';
  } else {
    panelHypo.classList.add('eiw-visible');
    panelHyper.classList.remove('eiw-visible');
    tabHypo.classList.add('eiw-active-hypo');
    tabHyper.classList.remove('eiw-active-hyper');
    icon.style.background = 'var(--accent-dim)';
    icon.style.borderColor = 'color-mix(in srgb, var(--accent) 35%, transparent)';
    icon.style.color = 'var(--accent)';
    subtitle.textContent = 'Hypokalemia • NHS SPS 2025';
  }
}

function wctSwitch(which){
  const panelMono = document.getElementById('wct-panel-mono');
  const panelPoly = document.getElementById('wct-panel-poly');
  const tabMono = document.getElementById('wct-tab-mono');
  const tabPoly = document.getElementById('wct-tab-poly');

  if(which === 'poly'){
    panelPoly.classList.add('wct-visible');
    panelMono.classList.remove('wct-visible');
    tabPoly.classList.add('wct-active-poly');
    tabMono.classList.remove('wct-active-mono');
  } else {
    panelMono.classList.add('wct-visible');
    panelPoly.classList.remove('wct-visible');
    tabMono.classList.add('wct-active-mono');
    tabPoly.classList.remove('wct-active-poly');
  }
}

function eiwSwitchNa(which){
  const panelHyper = document.getElementById('eiw-na-panel-hyper');
  const panelHypo = document.getElementById('eiw-na-panel-hypo');
  const tabHyper = document.getElementById('eiw-natab-hyper');
  const tabHypo = document.getElementById('eiw-natab-hypo');
  const icon = document.getElementById('eiw-na-icon');
  const subtitle = document.getElementById('eiw-na-subtitle');

  if(which === 'hyper'){
    panelHyper.classList.add('eiw-visible');
    panelHypo.classList.remove('eiw-visible');
    tabHyper.classList.add('eiw-active-hyper');
    tabHypo.classList.remove('eiw-active-hypo');
    icon.style.background = 'var(--sp-danger-bg)';
    icon.style.borderColor = 'var(--sp-danger-border)';
    icon.style.color = 'var(--sp-danger-text)';
    subtitle.textContent = 'Hypernatremia • Quick Workup';
  } else {
    panelHypo.classList.add('eiw-visible');
    panelHyper.classList.remove('eiw-visible');
    tabHypo.classList.add('eiw-active-hypo');
    tabHyper.classList.remove('eiw-active-hyper');
    icon.style.background = 'var(--accent-dim)';
    icon.style.borderColor = 'color-mix(in srgb, var(--accent) 35%, transparent)';
    icon.style.color = 'var(--accent)';
    subtitle.textContent = 'Hyponatremia • Correction Protocol';
  }
}

function eiwSwitchCa(which){
  const panelHyper = document.getElementById('eiw-ca-panel-hyper');
  const panelHypo = document.getElementById('eiw-ca-panel-hypo');
  const tabHyper = document.getElementById('eiw-catab-hyper');
  const tabHypo = document.getElementById('eiw-catab-hypo');
  const icon = document.getElementById('eiw-ca-icon');
  const subtitle = document.getElementById('eiw-ca-subtitle');

  if(which === 'hyper'){
    panelHyper.classList.add('eiw-visible');
    panelHypo.classList.remove('eiw-visible');
    tabHyper.classList.add('eiw-active-hyper');
    tabHypo.classList.remove('eiw-active-hypo');
    icon.style.background = 'var(--sp-danger-bg)';
    icon.style.borderColor = 'var(--sp-danger-border)';
    icon.style.color = 'var(--sp-danger-text)';
    subtitle.textContent = 'Hypercalcemia • Endocrine Society 2023';
  } else {
    panelHypo.classList.add('eiw-visible');
    panelHyper.classList.remove('eiw-visible');
    tabHypo.classList.add('eiw-active-hypo');
    tabHyper.classList.remove('eiw-active-hyper');
    icon.style.background = 'var(--accent-dim)';
    icon.style.borderColor = 'color-mix(in srgb, var(--accent) 35%, transparent)';
    icon.style.color = 'var(--accent)';
    subtitle.textContent = 'Hypocalcemia • Emergency Mx';
  }
}

function eiwSwitchMg(which){
  const panelHyper = document.getElementById('eiw-mg-panel-hyper');
  const panelHypo = document.getElementById('eiw-mg-panel-hypo');
  const tabHyper = document.getElementById('eiw-mgtab-hyper');
  const tabHypo = document.getElementById('eiw-mgtab-hypo');
  const icon = document.getElementById('eiw-mg-icon');
  const subtitle = document.getElementById('eiw-mg-subtitle');

  if(which === 'hyper'){
    panelHyper.classList.add('eiw-visible');
    panelHypo.classList.remove('eiw-visible');
    tabHyper.classList.add('eiw-active-hyper');
    tabHypo.classList.remove('eiw-active-hypo');
    icon.style.background = 'var(--sp-danger-bg)';
    icon.style.borderColor = 'var(--sp-danger-border)';
    icon.style.color = 'var(--sp-danger-text)';
    subtitle.textContent = 'Hypermagnesemia • Emergency Mx';
  } else {
    panelHypo.classList.add('eiw-visible');
    panelHyper.classList.remove('eiw-visible');
    tabHypo.classList.add('eiw-active-hypo');
    tabHyper.classList.remove('eiw-active-hyper');
    icon.style.background = 'var(--accent-dim)';
    icon.style.borderColor = 'color-mix(in srgb, var(--accent) 35%, transparent)';
    icon.style.color = 'var(--accent)';
    subtitle.textContent = 'Hypomagnesemia • Emergency Mx';
  }
}

function eiwSwitchPO4(which){
  const panelHyper = document.getElementById('eiw-po4-panel-hyper');
  const panelHypo = document.getElementById('eiw-po4-panel-hypo');
  const tabHyper = document.getElementById('eiw-po4tab-hyper');
  const tabHypo = document.getElementById('eiw-po4tab-hypo');
  const icon = document.getElementById('eiw-po4-icon');
  const subtitle = document.getElementById('eiw-po4-subtitle');

  if(which === 'hyper'){
    panelHyper.classList.add('eiw-visible');
    panelHypo.classList.remove('eiw-visible');
    tabHyper.classList.add('eiw-active-hyper');
    tabHypo.classList.remove('eiw-active-hypo');
    icon.style.background = 'var(--sp-danger-bg)';
    icon.style.borderColor = 'var(--sp-danger-border)';
    icon.style.color = 'var(--sp-danger-text)';
    subtitle.textContent = 'Hyperphosphatemia • Emergency Mx';
  } else {
    panelHypo.classList.add('eiw-visible');
    panelHyper.classList.remove('eiw-visible');
    tabHypo.classList.add('eiw-active-hypo');
    tabHyper.classList.remove('eiw-active-hyper');
    icon.style.background = 'var(--accent-dim)';
    icon.style.borderColor = 'color-mix(in srgb, var(--accent) 35%, transparent)';
    icon.style.color = 'var(--accent)';
    subtitle.textContent = 'Hypophosphatemia • Emergency Mx';
  }
}
 
;

/* ═══ chunk 2/4 (was inline <script> at index.html line 9392) ═══ */
   /* ── Antibiotic Coverage Card: data + render (scoped, abx- prefixed) ──
      Content ported verbatim from the source reference card — values are
      not to be edited without re-checking against the source PDF/formulary. */

   // dots: [gram+, gram-, anaerobe, atypical, pseudomonas] each 0-3
   const abxSpectrumGroups = [
     { group: "Penicillins", drugs: [
       { name:"Penicillin G", cls:"Natural PCN", dots:[2,0,1,0,0], note:"Strep, syphilis, meningococcus" },
       { name:"Amoxicillin", cls:"Aminopenicillin", dots:[2,1,1,0,0], note:"No anti-staph activity" },
       { name:"Amoxicillin-<br>clavulanate", cls:"β-lactam/BLI", dots:[2,2,2,0,0], note:"Adds anaerobe + β-lactamase cover" },
       { name:"Ampicillin-<br>sulbactam", cls:"β-lactam/BLI (IV)", dots:[3,2,2,0,0], note:"Covers Enterococcus" },
       { name:"Piperacillin-tazobactam", cls:"β-lactam/BLI", dots:[2,3,3,0,3], note:"Workhorse broad-spectrum IV agent" },
     ]},
     { group: "Cephalosporins", drugs: [
       { name:"Cefazolin", cls:"1st gen", dots:[3,1,0,0,0], note:"Best for MSSA / clean surgical ppx" },
       { name:"Cefuroxime", cls:"2nd gen", dots:[2,2,0,0,0], note:"H. influenzae, Moraxella" },
       { name:"Ceftriaxone", cls:"3rd gen", dots:[2,3,0,0,0], note:"No pseudomonas, no MRSA" },
       { name:"Ceftazidime", cls:"3rd gen (anti-pseudo)", dots:[0,3,0,0,3], note:"Weak gram-positive activity" },
       { name:"Cefepime", cls:"4th gen", dots:[2,3,0,0,3], note:"Broad + antipseudomonal" },
       { name:"Ceftaroline", cls:"5th gen", dots:[3,2,0,0,0], note:"Only cephalosporin covering MRSA" },
       { name:"Ceftazidime-avibactam", cls:"3rd gen + BLI", dots:[0,3,0,0,3], note:"Adds ESBL/KPC cover; SHC-restricted" },
       { name:"Cefoperazone-sulbactam", cls:"3rd gen + BLI", dots:[1,3,2,0,2], note:"Anaerobe cover via sulbactam; rarely used" },
     ]},
     { group: "Carbapenems / Monobactam", drugs: [
       { name:"Ertapenem", cls:"Carbapenem", dots:[2,3,3,0,0], note:"No pseudomonas / no enterococcus" },
       { name:"Meropenem", cls:"Carbapenem", dots:[2,3,3,0,3], note:"Broadest routine agent" },
       { name:"Imipenem-cilastatin", cls:"Carbapenem", dots:[3,3,3,0,3], note:"Slightly better gram+/anaerobe than mero; lowers seizure threshold" },
       { name:"Doripenem", cls:"Carbapenem", dots:[2,3,3,0,3], note:"Comparable to meropenem, slight in-vitro edge vs Pseudomonas; no established HD dosing" },
       { name:"Aztreonam", cls:"Monobactam", dots:[0,3,0,0,2], note:"Safe in severe PCN allergy" },
     ]},
     { group: "Fluoroquinolones", drugs: [
       { name:"Ciprofloxacin", cls:"FQ", dots:[1,3,0,2,2], note:"Weakest gram-positive/pneumococcus" },
       { name:"Levofloxacin", cls:"Respiratory FQ", dots:[2,2,1,3,1], note:"Good pneumococcus + atypicals" },
       { name:"Moxifloxacin", cls:"Respiratory FQ", dots:[2,2,2,3,0], note:"No urinary penetration — avoid in UTI" },
       { name:"Delafloxacin", cls:"Anionic FQ", dots:[3,2,1,2,1], note:"Best gram-positive/MRSA activity of the FQs; IV form limited in renal impairment (SBECD vehicle)" },
       { name:"Sitafloxacin", cls:"FQ", dots:[3,3,2,2,2], note:"Broadest-spectrum FQ incl. anaerobes; not FDA-approved — Japan/Asia-Pacific availability" },
     ]},
     { group: "Macrolide / Tetracycline / Folate inhibitor", drugs: [
       { name:"Azithromycin", cls:"Macrolide", dots:[1,1,0,3,0], note:"Atypicals, CAP combo agent" },
       { name:"Clarithromycin", cls:"Macrolide", dots:[1,1,0,3,0], note:"Similar to azithro; more drug interactions, H. pylori combo" },
       { name:"Doxycycline", cls:"Tetracycline", dots:[2,1,1,3,0], note:"Atypicals, tick-borne, CA-MRSA skin" },
       { name:"Tigecycline", cls:"Glycylcycline", dots:[2,2,3,2,0], note:"Broad but NO Pseudomonas/Proteus; poor blood/urine levels — avoid in bacteremia/UTI" },
       { name:"Trimethoprim-sulfamethoxazole", cls:"Folate inhibitor", dots:[2,2,0,0,0], note:"CA-MRSA, UTI, PJP" },
     ]},
     { group: "Anti-MRSA / Gram-positive specialists", drugs: [
       { name:"Vancomycin", cls:"Glycopeptide", dots:[3,0,0,0,0], note:"MRSA; PO form treats C. diff only" },
       { name:"Teicoplanin", cls:"Glycopeptide", dots:[3,0,0,0,0], note:"Similar to vancomycin; once-daily after loading, less nephrotoxic" },
       { name:"Linezolid", cls:"Oxazolidinone", dots:[3,0,1,0,0], note:"MRSA + VRE; good lung penetration" },
       { name:"Daptomycin", cls:"Lipopeptide", dots:[3,0,0,0,0], note:"MRSA/VRE — inactivated in lung, avoid in PNA" },
       { name:"Clindamycin", cls:"Lincosamide", dots:[2,0,2,0,0], note:"Anti-toxin effect; some CA-MRSA" },
     ]},
     { group: "Anaerobe / Gram-negative specialists", drugs: [
       { name:"Metronidazole", cls:"Nitroimidazole", dots:[0,0,3,0,0], note:"Anaerobes below diaphragm, C. diff" },
       { name:"Gentamicin", cls:"Aminoglycoside", dots:[0,3,0,0,2], note:"Usually used for synergy, not alone" },
       { name:"Amikacin", cls:"Aminoglycoside", dots:[0,3,0,0,2], note:"Often active vs gentamicin-resistant GNRs; MDR use" },
       { name:"Colistin", cls:"Polymyxin", dots:[0,3,0,0,3], note:"Last-line for MDR/XDR gram-negatives" },
       { name:"Polymyxin B", cls:"Polymyxin", dots:[0,3,0,0,3], note:"Last-line for MDR/XDR gram-negatives; given as active drug (not a prodrug like colistin)" },
       { name:"Fosfomycin", cls:"Phosphonic acid", dots:[1,2,0,0,0], note:"PO: E. coli UTI single-dose; IV form broader, not first-line" },
     ]},
   ];

   const abxEmpiricSites = [
     { site:"CAP — outpatient, healthy", abbr:"CAP", rx:[
         {tag:"No comorbidities", drugs:"Amoxicillin <b>or</b> Doxycycline <b>or</b> Azithromycin (if local resistance low)"},
         {tag:"With comorbidities", drugs:"Amox-clavulanate + macrolide/doxycycline, <b>or</b> respiratory FQ (levo/moxi) alone"},
     ]},
     { site:"CAP — inpatient", abbr:"CAP", rx:[
         {tag:"Non-ICU", drugs:"Ceftriaxone + Azithromycin <b>or</b> respiratory FQ monotherapy"},
         {tag:"ICU / severe", drugs:"Ceftriaxone + Azithromycin (or FQ)"},
         {tag:"+ MRSA risk", drugs:"add Vancomycin <b>or</b> Linezolid", note:true},
         {tag:"+ Pseudomonas risk", drugs:"switch to Pip-tazo / Cefepime / Meropenem", note:true},
     ]},
     { site:"HAP (non-ventilated)", abbr:"HAP", rx:[
         {tag:"Standard risk", drugs:"Piperacillin-tazobactam <b>or</b> Cefepime <b>or</b> Levofloxacin"},
         {tag:"+ MRSA risk factors", drugs:"add Vancomycin <b>or</b> Linezolid", note:true},
     ]},
     { site:"VAP", abbr:"VAP", rx:[
         {tag:"Base regimen", drugs:"Antipseudomonal β-lactam: Pip-tazo, Cefepime, <b>or</b> Meropenem"},
         {tag:"High resistance risk", drugs:"add 2nd antipseudomonal (aminoglycoside or ciprofloxacin)"},
         {tag:"+ MRSA risk factors", drugs:"add Vancomycin <b>or</b> Linezolid", note:true},
     ]},
     { site:"UTI — uncomplicated cystitis", abbr:"UTI", rx:[
         {tag:"First line", drugs:"Nitrofurantoin <b>or</b> TMP-SMX <b>or</b> Fosfomycin (single dose)"},
     ]},
     { site:"UTI — pyelonephritis / urosepsis", abbr:"UTI", rx:[
         {tag:"Outpatient", drugs:"Ciprofloxacin <b>or</b> Levofloxacin (only if local resistance &lt;10%)"},
         {tag:"Inpatient / severe", drugs:"Ceftriaxone <b>or</b> Piperacillin-tazobactam"},
     ]},
     { site:"Intra-abdominal infection", abbr:"IAI", rx:[
         {tag:"Community, mild-mod", drugs:"Ceftriaxone + Metronidazole <b>or</b> Ertapenem alone"},
         {tag:"Severe / healthcare-assoc.", drugs:"Piperacillin-tazobactam <b>or</b> Meropenem"},
         {tag:"+ MRSA risk", drugs:"add Vancomycin", note:true},
     ]},
     { site:"SSTI — cellulitis (non-purulent)", abbr:"SSTI", rx:[
         {tag:"First line", drugs:"Cefazolin (IV) <b>or</b> Cephalexin (PO) — covers strep"},
     ]},
     { site:"SSTI — purulent / abscess", abbr:"SSTI", rx:[
         {tag:"I&D is primary Rx", drugs:"Antibiotics adjunct only if systemic signs"},
         {tag:"MRSA risk", drugs:"TMP-SMX <b>or</b> Doxycycline (PO); Vancomycin (IV, severe)"},
     ]},
     { site:"Necrotizing fasciitis", abbr:"SSTI", rx:[
         {tag:"Empiric triple", drugs:"Vancomycin/Linezolid + Piperacillin-tazobactam/Meropenem + Clindamycin"},
         {tag:"Why clindamycin", drugs:"Suppresses exotoxin production — surgical debridement is essential", note:true},
     ]},
     { site:"Bacterial meningitis (adult, empiric)", abbr:"CNS", rx:[
         {tag:"Standard", drugs:"Vancomycin + Ceftriaxone"},
         {tag:"Age &gt;50 / immunocompromised", drugs:"add Ampicillin for Listeria coverage", note:true},
         {tag:"Adjunct", drugs:"Dexamethasone with/before first dose"},
     ]},
     { site:"Bacteremia / sepsis, unknown source", abbr:"BSI", rx:[
         {tag:"Base regimen", drugs:"Piperacillin-tazobactam <b>or</b> Cefepime"},
         {tag:"+ MRSA risk", drugs:"add Vancomycin pending cultures", note:true},
     ]},
     { site:"Febrile neutropenia", abbr:"ONC", rx:[
         {tag:"Monotherapy", drugs:"Cefepime <b>or</b> Piperacillin-tazobactam <b>or</b> Meropenem"},
     ]},
   ];

   const abxOrganisms = [
     { name:"MSSA", tag:"Gram + coccus", first:"Nafcillin / Oxacillin (or Cefazolin)", alt:"Clindamycin if allergic" },
     { name:"MRSA — skin/soft tissue", tag:"Gram + coccus", first:"TMP-SMX / Doxycycline / Clindamycin (PO)", alt:"" },
     { name:"MRSA — bacteremia/severe", tag:"Gram + coccus", first:"Vancomycin", alt:"Daptomycin / Linezolid", severe:true },
     { name:"Streptococcus pyogenes (GAS)", tag:"Gram + coccus", first:"Penicillin G / Amoxicillin", alt:"" },
     { name:"Streptococcus pneumoniae", tag:"Gram + coccus", first:"Amoxicillin / Ceftriaxone", alt:"Vancomycin + Ceftriaxone if PCN-resistant + meningitis" },
     { name:"Group B Strep (S. agalactiae)", tag:"Gram + coccus", first:"Penicillin G / Ampicillin", alt:"" },
     { name:"Enterococcus faecalis (VSE)", tag:"Gram + coccus", first:"Ampicillin", alt:"Vancomycin if allergic" },
     { name:"VRE", tag:"Gram + coccus", first:"Linezolid / Daptomycin", alt:"", severe:true },
     { name:"Listeria monocytogenes", tag:"Gram + bacillus", first:"Ampicillin (± Gentamicin)", alt:"TMP-SMX if allergic" },
     { name:"Pseudomonas aeruginosa", tag:"Gram − bacillus", first:"Piperacillin-tazobactam / Cefepime / Meropenem", alt:"Ceftazidime; add aminoglycoside for synergy" },
     { name:"E. coli / Klebsiella (non-ESBL)", tag:"Gram − bacillus", first:"Ceftriaxone", alt:"Amox-clav for mild/PO" },
     { name:"ESBL-producing Enterobacterales", tag:"Gram − bacillus", first:"Meropenem / Ertapenem", alt:"", severe:true },
     { name:"CRE (carbapenem-resistant)", tag:"Gram − bacillus", first:"Colistin / Polymyxin B / Ceftazidime-avibactam", alt:"Specialist / ID consult", severe:true },
     { name:"Acinetobacter baumannii (MDR)", tag:"Gram − bacillus", first:"Ampicillin-sulbactam (high-dose) / Colistin / Polymyxin B", alt:"", severe:true },
     { name:"Neisseria meningitidis", tag:"Gram − diplococcus", first:"Penicillin G / Ceftriaxone", alt:"" },
     { name:"Bacteroides fragilis", tag:"Anaerobe", first:"Metronidazole", alt:"Piperacillin-tazobactam" },
     { name:"Mycoplasma pneumoniae", tag:"Atypical", first:"Azithromycin / Doxycycline", alt:"" },
     { name:"Legionella pneumophila", tag:"Atypical", first:"Azithromycin / Levofloxacin", alt:"" },
     { name:"Chlamydia trachomatis", tag:"Atypical", first:"Azithromycin / Doxycycline", alt:"" },
     { name:"Clostridioides difficile", tag:"Anaerobe (toxin)", first:"Vancomycin (PO) / Fidaxomicin", alt:"Metronidazole — only if others unavailable" },
   ];

   const abxRenalDosing = [
     { group:"Beta-lactams / BLI", drugs:[
       { name:"Ceftriaxone", n:"1–2 g q24h (severe/meningitis 2g q12h)", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"Hepatobiliary excretion — no renal adjustment" },
       { name:"Piperacillin-tazobactam", n:"3.375–4.5g q8h ext-inf(4h); severe 4.5g q6h", m:"2.25g q6h (CrCl20–40); severe 3.375g q6h", s:"2.25g q8h (CrCl<20)", ihd:"2.25g q12h (severe 3.375g q12h ext-inf)", crrt:"3.375g q6h or ext-inf 3.375–4.5g q8h(4h)", note:"Extended infusion preferred for Pseudomonas/severe sepsis" },
       { name:"Aztreonam", n:"1–2g q8h (severe/meningitis 2g q6–8h)", m:"1g q8h (severe 1g q6–8h)", s:"500mg q8h (severe 1g q12h)", ihd:"1g q24h (severe 1g q12h), dose after HD", crrt:"2g load, then 1g q8h or 2g q12h", note:"Safe in severe PCN allergy" },
       { name:"Ceftazidime-avibactam", n:"2.5g q8h", m:"1.25g q8h (31–50) / 0.94g q12h (16–30)", s:"0.94g q24h (6–15) / q48h (&lt;5)", ihd:"0.94g q24–48h, dose after HD", crrt:"1.25g q8h (2.5g q8h if MIC&gt;4/deep-seated)", note:"SHC-restricted — stewardship approval usually needed" },
       { name:"Cefoperazone-sulbactam", n:"2–4g (1:1) IV q12h", m:"No change (cefoperazone hepatobiliary)", s:"Extend to q24h if CrCl&lt;15 (sulbactam accumulates)", ihd:"Dose after HD", crrt:"Usual dose q12h", note:"Max sulbactam 4g/day • standard reference, not Stanford PDF" },
     ]},
     { group:"Carbapenems", drugs:[
       { name:"Meropenem", n:"1g q8h (CF/CNS 2g q8h)", m:"1g q12h (26–50) / 0.5g q12h (10–25); CF/CNS double", s:"0.5g q24h (CF/CNS 1g q24h)", ihd:"500mg q24h after HD (CF/CNS 1g q24h)", crrt:"1g q8h (CF/CNS 2g q12h)", note:"3-hr extended infusion" },
       { name:"Imipenem-cilastatin", n:"500mg q6h or 1g q8h (CrCl&gt;60)", m:"500mg q8h (30–59) / 500mg q12h (15–29)", s:"Not recommended unless dialysis started &lt;48h", ihd:"250–500mg q12h", crrt:"1g load, then 500mg q6h", note:"NTM dosing higher — see source" },
     ]},
     { group:"Other antibacterials", drugs:[
       { name:"Metronidazole", n:"500mg q8h (IAI q8–12h)", m:"No formal reduction", s:"Caution: accumulation if CrCl&lt;30, esp. use &gt;1–2 wks", ihd:"No change", crrt:"No change", note:"Severe hepatic impairment: 500mg q12h" },
       { name:"Clindamycin", n:"600–900mg IV q8h", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"Hepatically metabolized — no renal adjustment" },
       { name:"Trimethoprim-sulfamethoxazole", n:"Per indication (e.g. 15mg/kg/day TMP for PJP)", m:"50% of dose (CrCl15–30)", s:"Not recommended; PJP essential: 5–7.5mg/kg TMP q24h", ihd:"25–50% usual dose, dose after HD", crrt:"5–10mg/kg/day TMP ÷ q12h (higher for PJP/Steno)", note:"" },
       { name:"Moxifloxacin", n:"400mg IV/PO q24h", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"Hepatically cleared" },
       { name:"Linezolid", n:"600mg IV/PO q12h", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"" },
       { name:"Tigecycline", n:"100mg IV load, then 50mg q12h", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"Hepatobiliary elimination — no renal adjustment • Child-Pugh C: 25mg q12h after load • standard reference" },
       { name:"Clarithromycin", n:"500mg PO/IV q12h (XR: 1000mg q24h)", m:"No change", s:"Reduce dose 50% if CrCl&lt;30 (e.g. 250mg q12h or 500mg q24h)", ihd:"As CrCl&lt;30 tier, dose after HD", crrt:"As CrCl&lt;30 tier", note:"Standard reference, not Stanford PDF" },
       { name:"Fosfomycin", n:"IV: 4–8g q8h (severe/MDR) • PO: 3g single dose (cystitis)", m:"IV: extend interval / reduce dose", s:"IV: further reduction — involve pharmacy", ihd:"IV: dose post-HD", crrt:"IV: usual dose, monitor levels if available", note:"PO single-dose needs no renal adjustment • standard reference" },
     ]},
     { group:"Aminoglycosides (level-guided)", drugs:[
       { name:"Amikacin", n:"15–20mg/kg IV q24h (extended-interval, level-guided)", m:"Same load; extend interval to ~q36h per level", s:"Same load; extend interval to ~q48h+ per level", ihd:"Dose post-HD only; redose per level", crrt:"15mg/kg q24–48h per level", note:"Trough &lt;5, peak 56–64 target — confirm local nomogram • standard reference" },
       { name:"Gentamicin", n:"5–7mg/kg IV q24h (extended-interval, level-guided)", m:"Same load; extend interval to ~q36h per level", s:"Same load; extend interval to ~q48h+ per level", ihd:"Dose post-HD only; redose per level", crrt:"3–5mg/kg q24–48h per level", note:"Hartford nomogram • synergy dosing lower (1mg/kg q8h) • standard reference" },
     ]},
     { group:"Anti-MRSA / MDR gram-negative agents", drugs:[
       { name:"Colistin (colistimethate)", n:"Load 5mg/kg CBA (~300mg CBA/9MIU), then 2.5–5mg/kg/day CBA ÷ q12h", m:"Reduce maintenance proportionally (Garonzik formula)", s:"~130–150mg CBA q24h", ihd:"130–150mg CBA q24–48h, dosed post-HD", crrt:"300–400mg CBA/day ÷ q12h", note:"Dosed in colistin base activity (CBA) — confirm mg vs IU labeling locally • standard reference" },
       { name:"Polymyxin B", n:"Load 2–2.5mg/kg, then 1.25–1.5mg/kg IV q12h", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"Given as active drug, not renally cleared — no adjustment at any CrCl or on RRT per 2019 int'l consensus guidelines; preferred over colistin where AKI risk is a concern • standard reference" },
       { name:"Teicoplanin", n:"Load 400mg(6–12mg/kg) q12h ×3, then 400mg q24h", m:"CrCl40–60: halve maintenance after day 4", s:"CrCl&lt;40: reduce to 1/3 maintenance after day 4", ihd:"As CrCl&lt;40 tier, dose after HD", crrt:"Loading unchanged; maintenance as CrCl&lt;40 tier", note:"Trough &gt;20mg/L for endocarditis/severe infection — TDM advised • standard reference" },
     ]},
     { group:"Antifungals", drugs:[
       { name:"Caspofungin", n:"70mg load, then 50mg q24h (endocarditis 150mg q24h)", m:"No change", s:"No change", ihd:"No change", crrt:"No change", note:"No adjustment for Child-Pugh B/C" },
       { name:"Voriconazole", n:"IV 6mg/kg q12h ×2, then 4mg/kg q12h", m:"No formal change", s:"Prefer PO if CrCl&lt;50 (IV cyclodextrin accumulates)", ihd:"Same caution", crrt:"Same caution", note:"TDM strongly recommended" },
       { name:"Fluconazole", n:"Mild:200mg→100–200mg q24h • Severe:800mg→400–800mg q24h", m:"Mild:200mg→100mg q24h • Severe:800mg→200–400mg q24h", s:"Same as CrCl≤50 tier", ihd:"Dose after HD on HD days", crrt:"Higher: load 800–1200mg, then 400–800mg q24h", note:"C. glabrata (SDD) needs higher dose / ID consult" },
     ]},
     { group:"Antivirals", drugs:[
       { name:"Acyclovir (IV)", n:"General 5mg/kg q8h • Severe(CNS) 10mg/kg q8h", m:"General 5mg/kg q12h • Severe 10mg/kg q12h (25–50)", s:"General 5mg/kg q24h • Severe 10mg/kg q24h (&lt;25)", ihd:"General 2.5mg/kg q24h • Severe 5mg/kg q24h, after HD", crrt:"General 5–10mg/kg q12h • Severe 10mg/kg q12h", note:"Use adjusted BW if obese" },
       { name:"Oseltamivir", n:"Treatment 75mg q12h • Prophylaxis 75mg q24h", m:"Tx 75mg×1 then 30mg q12h (30–60)", s:"Tx 30mg q24h (10–30) / q48h (≤10)", ihd:"Tx 30mg×1, then 30mg post-HD only", crrt:"As normal dose (75mg q12h)", note:"" },
       { name:"Entecavir", n:"0.5mg PO q24h (1mg if lamivudine-experienced/decompensated)", m:"CrCl30–49: 0.25mg q24h or 0.5mg q48h", s:"CrCl10–29: 0.15mg q24h or 0.5mg q72h", ihd:"0.05mg q24h or 0.5mg q7days, dose after HD", crrt:"Approximate using CrCl&lt;10 tier", note:"Hepatitis B antiviral, not antibacterial • standard reference" },
     ]},
   ];

   const abxProtocolDrugs = [
     { name:"Vancomycin (IV)", why:"AUC24/MIC 400–600 preferred (2020 consensus) — use dedicated Vancomycin dosing protocol, not a fixed table" },
   ];

   const abxSourceNote = "Rows marked \"standard reference\" (Tigecycline, Clarithromycin, Fosfomycin, Amikacin, Gentamicin, Colistin, Polymyxin B, Teicoplanin, Cefoperazone-sulbactam, Entecavir) come from established pharmacology references (Sanford/Lexicomp-type), not the Stanford PDF — cross-check against your hospital's own antibiogram/formulary.";

   function abxDotsHtml(level){
     let h = '<span class="abx-dots">';
     for(let i=0;i<3;i++) h += `<span class="abx-dot${i<level?' abx-on':''}"></span>`;
     return h+'</span>';
   }

   // Long group names ("Macrolide / Tetracycline / Folate inhibitor") get an
   // explicit break at the LAST " / " so they render as exactly two fixed
   // lines instead of relying on the browser to wrap+clamp them (which was
   // producing an inconsistent line count and a stray ellipsis).
   function abxGrpLabelHtml(name){
     return `<span class="abx-grp-label-txt">${name}</span>`;
   }

   function abxRenderSpectrum(){
     const tbody = document.querySelector('#abx-spectrumTable tbody');
     if (!tbody) return;
     let html = '';
     abxSpectrumGroups.forEach(g=>{
       html += `<tr class="abx-grp-row">
         <td class="abx-grp-label">${abxGrpLabelHtml(g.group)}</td>
         <td class="abx-grp-fill abx-grp-colhead">Class</td>
         <td class="abx-grp-fill abx-grp-colhead abx-center">Gram +</td>
         <td class="abx-grp-fill abx-grp-colhead abx-center">Gram −</td>
         <td class="abx-grp-fill abx-grp-colhead abx-center">Anaerobe</td>
         <td class="abx-grp-fill abx-grp-colhead abx-center">Atypical</td>
         <td class="abx-grp-fill abx-grp-colhead abx-center">Pseudomonas</td>
         <td class="abx-grp-fill abx-grp-colhead">Notes</td>
       </tr>`;
       g.drugs.forEach(d=>{
         html += `<tr>
           <td class="abx-drug"><span class="abx-drug-name">${d.name}</span></td>
           <td class="abx-cls">${d.cls}</td>
           <td class="abx-center">${abxDotsHtml(d.dots[0])}</td>
           <td class="abx-center">${abxDotsHtml(d.dots[1])}</td>
           <td class="abx-center">${abxDotsHtml(d.dots[2])}</td>
           <td class="abx-center">${abxDotsHtml(d.dots[3])}</td>
           <td class="abx-center">${abxDotsHtml(d.dots[4])}</td>
           <td class="abx-notes">${d.note}</td>
         </tr>`;
       });
     });
     tbody.innerHTML = html;
   }

   function abxRenderSites(){
     const grid = document.getElementById('abx-siteGrid');
     if (!grid) return;
     let html = '';
     abxEmpiricSites.forEach(s=>{
       html += `<div class="abx-site">
         <div class="abx-site-head"><h3>${s.site}</h3><span class="abx-abbr">${s.abbr}</span></div>
         <div class="abx-site-body">`;
       s.rx.forEach(r=>{
         if(r.note){
           html += `<div class="abx-rx-note"><b>${r.tag}:</b> ${r.drugs}</div>`;
         } else {
           html += `<div class="abx-rx-line"><span class="abx-rx-tag">${r.tag}</span><span class="abx-rx-drugs">${r.drugs}</span></div>`;
         }
       });
       html += `</div></div>`;
     });
     grid.innerHTML = html;
   }

   function abxRenderOrganisms(list){
     const wrap = document.getElementById('abx-orgList');
     const empty = document.getElementById('abx-orgEmpty');
     if (!wrap || !empty) return;
     if(list.length===0){ wrap.innerHTML=''; empty.style.display='block'; return; }
     empty.style.display='none';
     wrap.innerHTML = list.map(o=>`
       <div class="abx-org-row${o.severe?' abx-severe':''}">
         <div><span class="abx-org-name">${o.name}</span><span class="abx-org-tag">${o.tag}</span></div>
         <div class="abx-doc"><span class="abx-first">${o.first}</span>${o.alt?`<span class="abx-alt">${o.alt}</span>`:''}</div>
       </div>`).join('');
   }

   function abxFilterOrganisms(q){
     q = (q || '').trim().toLowerCase();
     const filtered = abxOrganisms.filter(o =>
       o.name.toLowerCase().includes(q) ||
       o.tag.toLowerCase().includes(q) ||
       o.first.toLowerCase().includes(q)
     );
     abxRenderOrganisms(filtered);
   }

   function abxRenderRenal(){
     const tbody = document.querySelector('#abx-renalTable tbody');
     if (!tbody) return;
     let html = '';
     abxRenalDosing.forEach(g=>{
       html += `<tr class="abx-grp-row">
         <td class="abx-grp-label">${abxGrpLabelHtml(g.group)}</td>
         <td class="abx-grp-fill abx-grp-colhead">CrCl &gt;50</td>
         <td class="abx-grp-fill abx-grp-colhead">CrCl 10–50</td>
         <td class="abx-grp-fill abx-grp-colhead">CrCl &lt;10</td>
         <td class="abx-grp-fill abx-grp-colhead">IHD</td>
         <td class="abx-grp-fill abx-grp-colhead">CRRT</td>
       </tr>`;
       g.drugs.forEach(d=>{
         html += `<tr>
           <td class="abx-drug"><span class="abx-drug-name">${d.name}</span>${d.note?`<br><span style="font-weight:400;color:var(--muted);font-size:9.5px;">${d.note}</span>`:''}</td>
           <td>${d.n}</td>
           <td>${d.m}</td>
           <td>${d.s}</td>
           <td>${d.ihd}</td>
           <td>${d.crrt}</td>
         </tr>`;
       });
     });
     tbody.innerHTML = html;

     const protocolEl = document.getElementById('abx-protocolDrugs');
     if (protocolEl) {
       protocolEl.innerHTML = abxProtocolDrugs.map(p =>
         `<div class="abx-rx-line" style="padding:0 6px;"><span class="abx-rx-tag" style="min-width:110px;">${p.name}</span><span class="abx-rx-drugs">${p.why}</span></div>`
       ).join('');
     }

     const sourceNoteEl = document.getElementById('abx-sourceNote');
     if (sourceNoteEl) sourceNoteEl.textContent = abxSourceNote;
   }

   abxRenderSpectrum();
   abxRenderSites();
   abxRenderOrganisms(abxOrganisms);
   abxRenderRenal();
   
;

/* ═══ chunk 3/4 (was inline <script> at index.html line 10893) ═══ */
  // Tap-to-expand removed: the "10 ECG Emergencies" image is now always
  // shown full width by default, so these are no-ops kept only in case
  // anything elsewhere still references them.
  function ecgImgExpand() {}
  function ecgImgCollapse() {}

  function toggleECGExpand(id) {
    const el = document.getElementById('ecg-expand-' + id);
    if (el) el.classList.toggle('show');
  }
  
;

/* ═══ chunk 4/4 (was inline <script> at index.html line 12175) ═══ */
let volStatus = 'depleted';
let optionalOpen = false;

function toggleRef(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('show');
}

const bolusData = [
 // ── Cardiac & Anti-arrhythmic ──
 { name:"Amiodarone", group:"Cardiac & Anti-arrhythmic", cat:"Anti-arrhythmic", color:"#f59e0b", amp:"1 amp = 3ml = 150mg", doseMin:null, doseMax:null, unit:"150mg fixed bolus", headerLabel:"150 – 300 mg", onset:"5-10 min", duration:"Variable", note:"Inj. 150mg (1 amp) in 20ml 5% DA IV over 20-30 min. N.B. Maximum 2 bolus doses. If AF not corrected after 2nd bolus → start maintenance infusion." },
 { name:"Adenosine <span class=\"brand-name\">(Adecard)</span>", group:"Cardiac & Anti-arrhythmic", cat:"Anti-arrhythmic", color:"#f59e0b", amp:"1 amp = 2ml = 6mg", doseMin:null, doseMax:null, unit:"mg rapid push", headerLabel:"6 – 12 mg", onset:"30 sec", duration:"2 min", note:"Standard (any peripheral line, incl. patients on CCB/BB): 6-12-12mg | Central line only: 3-6-6mg (reduced dose recognised for central administration) | FLUSH 20ml NS | <span style='color:#ef4444'>CI:</span> Asthma, Heart block" },
 { name:"Verapamil <span class=\"brand-name\">(Veracal)</span>", group:"Cardiac & Anti-arrhythmic", cat:"Anti-arrhythmic", color:"#f59e0b", amp:"1 amp = 2ml = 5mg", doseMin:0.075, doseMax:0.15, unit:"mg/kg IV push over 30sec-2min", onset:"5 min", duration:"2-8 hr", note:"EASY: 5-10mg | SVT only (NOT WPW) | If BP down: Ca gluconate 10% 10ml over 10min" },
 { name:"Labetalol", group:"Cardiac & Anti-arrhythmic", cat:"Anti-hypertensive", color:"#f59e0b", amp:"1 amp = 10ml = 50mg", doseMin:0.25, doseMax:0.5, unit:"mg/kg IV over 10 min", onset:"5-10 min", duration:"3-6 hr", note:"Usual dose: 20-80mg slow IV | Repeat every 10 min PRN | Max cumulative: 300mg | <span style='color:#ef4444'>CI:</span> Asthma, bradycardia, heart block, decompensated HF" },
 // ── Sedation & Analgesia ──
 { name:"Midazolam", group:"Sedation & Analgesia", cat:"Sedation", color:"#58a6ff", amp:"5mg/5cc OR 15mg/3cc amp", doseMin:0.02, doseMax:0.1, unit:"mg/kg slow IV", onset:"2-3 min", duration:"15-30 min", note:"IV bolus slowly over 2 min | Titrate to effect | Reduce dose in elderly & hepatic impairment" },
 { name:"Fentanyl", group:"Sedation & Analgesia", cat:"Analgesia", color:"#58a6ff", amp:"1 amp = 2ml = 100mcg", doseMin:0.3, doseMax:1.5, unit:"mcg/kg slow IV", onset:"2-5 min", duration:"30-60 min", note:"Give slowly over 3-5 min | Bolus: 0.3-1.5mcg/kg | Reduce in elderly & renal impairment" },
 { name:"Propofol", group:"Sedation & Analgesia", cat:"Sedation", color:"#58a6ff", amp:"200mg/20ml vial (10mg/ml)", doseMin:1, doseMax:2.5, unit:"mg/kg", onset:"60 sec", duration:"-", note:"For 70kg: 70-175mg" },
 // ── Induction & Neuromuscular Blockers (RSI) ──
 { name:"Ketamine", group:"Induction & NMB (RSI)", cat:"Induction / Dissociative", color:"#ef4444", amp:"500mg/10ml vial (50mg/ml)", doseMin:1, doseMax:2, unit:"mg/kg IV induction", onset:"30-60 sec", duration:"10-15 min", note:"RSI/induction: 1-2mg/kg IV | Sub-dissociative analgesia: 0.1-0.3mg/kg IV | Preferred in haemodynamic instability, bronchospasm/asthma | Raises BP &amp; HR — caution in IHD, uncontrolled HTN | Emergence reactions — co-administer Midazolam | <span style='color:#ef4444'>CI:</span> severe uncontrolled hypertension, eclampsia" },
 { name:"Suxamethonium", group:"Induction & NMB (RSI)", cat:"NMB (RSI)", color:"#ef4444", amp:"100mg/2ml amp (50mg/ml)", doseMin:1, doseMax:2, unit:"mg/kg", onset:"45-60 sec", duration:"5 min", note:"RSI drug of choice" },
 { name:"Atracurium", group:"Induction & NMB (RSI)", cat:"NMB", color:"#ef4444", amp:"25mg/2.5ml amp (10mg/ml)", doseMin:0.5, doseMax:0.5, unit:"mg/kg", onset:"90 sec", duration:"-", note:"Safe in hepatic & renal impairment" },
 { name:"Vecuronium <span class=\"brand-name\">(Norcuron)</span>", group:"Induction & NMB (RSI)", cat:"NMB", color:"#ef4444", amp:"10mg dry powder + 10ml NS", doseMin:0.08, doseMax:0.1, unit:"mg/kg (intubation)", onset:"90-120 sec", duration:"30 min", note:"Maintenance: 0.02-0.03mg/kg | 70kg ~ half amp" },
 { name:"Pipecuronium <span class=\"brand-name\">(Arduan)</span>", group:"Induction & NMB (RSI)", cat:"NMB", color:"#ef4444", amp:"4mg dry powder + 2ml NS", doseMin:0.06, doseMax:0.08, unit:"mg/kg", onset:"90-120 sec", duration:"60 min", note:"Renal failure: 0.04mg/kg | <span style='color:#ef4444'>CI:</span> Myasthenia Gravis | Antidote: Neostigmine" },
 { name:"Thiopental Sodium <span class=\"brand-name\">(TPS)</span>", group:"Status Epilepticus / Neuro-critical", cat:"Barbiturate coma", color:"#a78bfa", amp:"<span onclick=\"event.stopPropagation()\"><span class=\"mini-select\" id=\"mini-thiob-vial\"><button type=\"button\" class=\"mini-select-trigger\" id=\"mini-thiob-vial-trigger\" onclick=\"toggleMiniSelect(event,'mini-thiob-vial')\">500mg</button><span class=\"mini-select-panel\" data-owner=\"mini-thiob-vial\"><span class=\"mini-select-option selected\" onclick=\"pickThiobVial(event,500)\">500mg</span><span class=\"mini-select-option\" onclick=\"pickThiobVial(event,1000)\">1000mg</span></span></span> vial + 10ml<br><span style=\"white-space:nowrap\">WFI or 5% DA or 0.9% NS = <span id=\"thiob-conc\">50</span>mg/ml</span></span>", doseMin:2, doseMax:5, unit:"IV loading bolus", onset:"<30 sec", duration:"5-10 min", note:"ICU use is mainly refractory status epilepticus or barbiturate coma for raised ICP &mdash; NOT routine RSI/induction. Loading 2-5mg/kg (barbiturate coma protocols cite 2-3mg/kg; status epilepticus protocols cite 3-5mg/kg) &mdash; source table's 3-6mg/kg is the general-anaesthesia induction dose. Follow bolus with maintenance infusion (see Infusion Drugs), titrated to EEG burst suppression/seizure control. Significant myocardial depression/hypotension &mdash; caution in haemodynamic instability | <span style='color:#ef4444'>CI:</span> porphyria, status asthmaticus, severe shock" },
 // ── GI Bleed – Vasoactive Drugs ──
 { name:"Terlipressin", group:"GI Bleed – Vasoactive Drugs", cat:"Splanchnic Vasopressor", color:"#a78bfa", amp:"1 mg vial<br><span style=\"white-space:nowrap\">(lyophilized) + 8.5ml diluent</span>", doseMin:null, doseMax:null, unit:"IV bolus, every 4–6 hr", headerLabel:"1 – 2 mg", onset:"~30 min", duration:"4-6 hr", note:"For acute variceal bleeding &amp; hepatorenal syndrome | Give as slow IV bolus over 1 min | Reduce dose/frequency in elderly &amp; cardiovascular disease | Monitor for peripheral/cardiac ischaemia &amp; hyponatraemia | <span style='color:#ef4444'>CI:</span> uncontrolled hypertension, septic shock, pregnancy" },
 { name:"Somatostatin", group:"GI Bleed – Vasoactive Drugs", cat:"Splanchnic Vasoactive", color:"#a78bfa", amp:"3 mg vial (lyophilized) + solvent", doseMin:null, doseMax:null, unit:"IV slow bolus over 3–5 min", headerLabel:"250 mcg", onset:"1-2 min", duration:"~3 min (very short half-life)", note:"For acute variceal bleeding | <span style='font-size:0.8em;vertical-align:0.10em'>&#9888;&#65039;</span> Bolus alone is not enough — follow immediately with continuous infusion 250 mcg/hr, or effect wears off within minutes | May repeat bolus once in first hour if bleeding continues | Watch for hyperglycaemia, bradycardia, abdominal cramps" },
 { name:"Octreotide", group:"GI Bleed – Vasoactive Drugs", cat:"Somatostatin Analogue", color:"#a78bfa", amp:"1 amp = 1ml = 50mcg", doseMin:null, doseMax:null, unit:"IV bolus", headerLabel:"50 mcg", onset:"few min", duration:"~1.5-2 hr", note:"For acute variceal bleeding | Follow bolus with continuous infusion 25–50 mcg/hr | Longer acting than Somatostatin, less frequent redosing needed | Monitor blood glucose (can cause hyper- or hypoglycaemia)" },
 // ── Anti-epileptic & Endocrine ──
 { name:"Phenytoin <span class=\"brand-name\">(Eptoin)</span>", group:"Anti-epileptic & Endocrine", cat:"Anti-epileptic", color:"#10b981", amp:"1 amp = 2ml = 100mg", doseMin:15, doseMax:15, unit:"mg/kg loading", onset:"-", duration:"-", note:"Dilute each amp to 5ml | Max rate 50 mg/min (never exceed) | Caution: bradycardia, hypotension — pregnancy is not an absolute CI in status epilepticus, weigh risk/benefit" },
 { name:"Human Insulin R <span class=\"brand-name\" style=\"font-size:0.78em\">(Actrapid HM 100IU/ml)</span>", group:"Anti-epileptic & Endocrine", cat:"Endocrine", color:"#10b981", amp:"100 IU/ml vial | S/C injection", doseMin:null, doseMax:null, unit:"units S/C", onset:"15-30 min", duration:"4-6 hr", slidingScale:true, smallHeader:true },
];

function pickThiobVial(e, vialMg) {
 e.stopPropagation();
 const trigEl = document.getElementById('mini-thiob-vial-trigger');
 if (trigEl) trigEl.textContent = (vialMg === 1000 ? '1gm' : '500mg');
 document.querySelectorAll('[data-owner="mini-thiob-vial"] .mini-select-option').forEach(o => o.classList.remove('selected'));
 e.target.classList.add('selected');
 const concEl = document.getElementById('thiob-conc');
 if (concEl) concEl.textContent = (vialMg / 10).toFixed(0);
 closeAllMiniSelects();
}

function getWt() { return parseFloat(document.getElementById('globalWt').value) || 60; }

// ── Master global weight sync — every wt slider/number in the app feeds this ──
function syncGlobalWeight(val) {
 const v = Math.min(150, Math.max(0.5, parseFloat(val) || 60));
 // Same fix as syncField: never reassign .value onto the field currently
 // being typed in — that's what was resetting the cursor / eating decimals
 // on every weight input across the whole app (they all funnel through here).
 const active = document.activeElement;

 if (document.getElementById('globalWt') !== active) document.getElementById('globalWt').value = v;
 if (document.getElementById('globalWtNum') !== active) document.getElementById('globalWtNum').value = v;

 // Infusion Drugs tab — per-card weight sliders
 document.querySelectorAll('[id^="cwt-"]').forEach(el => {
  if (el.tagName === 'INPUT') {
   if (el !== active) el.value = v;
   const cardId = el.id.replace('cwt-', '');
   const label = document.getElementById('cwt-val-' + cardId);
   if (label) label.textContent = v;
  }
 });

 // Special Calc — Potassium correction
 const kwt = document.getElementById('k-wt'), kwtN = document.getElementById('k-wt-n');
 if (kwt && kwt !== active) kwt.value = v;
 if (kwtN && kwtN !== active) kwtN.value = v;

 // Special Calc — Sodium Bicarbonate
 const bicarbWt = document.getElementById('bicarb-wt'), bicarbWtN = document.getElementById('bicarb-wt-n');
 if (bicarbWt && bicarbWt !== active) bicarbWt.value = v;
 if (bicarbWtN && bicarbWtN !== active) bicarbWtN.value = v;

 // Special Calc — Creatinine Clearance (CrCl)
 const crclWt = document.getElementById('crcl-wt'), crclWtN = document.getElementById('crcl-wt-n');
 if (crclWt && crclWt !== active) crclWt.value = v;
 if (crclWtN && crclWtN !== active) crclWtN.value = v;

 // Special Calc — Insulin Dosing
 const insWt = document.getElementById('ins-wt'), insWtN = document.getElementById('ins-wt-n');
 if (insWt && insWt !== active) insWt.value = v;
 if (insWtN && insWtN !== active) insWtN.value = v;

 // Special Calc — Iron Deficiency Anaemia (IDA)
 const idaWt = document.getElementById('ida-wt'), idaWtN = document.getElementById('ida-wt-n');
 if (idaWt && idaWt !== active) idaWt.value = v;
 if (idaWtN && idaWtN !== active) idaWtN.value = v;

 // Special Calc — Free Water Deficit
 const fwdWt = document.getElementById('fwd-wt'), fwdWtN = document.getElementById('fwd-wt-n');
 if (fwdWt && fwdWt !== active) fwdWt.value = v;
 if (fwdWtN && fwdWtN !== active) fwdWtN.value = v;

 // Bolus Drugs — Heparin protocol
 const hepWt = document.getElementById('hep-wt'), hepWtN = document.getElementById('hep-wt-n');
 if (hepWt && hepWt !== active) hepWt.value = v;
 if (hepWtN && hepWtN !== active) hepWtN.value = v;

 // Hamburger menu — global weight slider
 const menuSlider = document.getElementById('menu-wt-slider'), menuNum = document.getElementById('menu-wt-num');
 if (menuSlider && menuSlider !== active) menuSlider.value = v;
 if (menuNum && menuNum !== active) menuNum.value = v;

 // Recalculate everything downstream
 updateAll();
 try { calcCrCl(); } catch(e) {}
 try { calcInsDosingAll(); } catch(e) {}
 try { idaUpdateTarget(); calcGanzoni(); calcTable(); calcOral(); calcIV(); } catch(e) {}
 try { calcFWD(); } catch(e) {}
}

// Back-compat wrappers (kept so existing onclick/oninput references still work)
function cwtSync(cardId, val) { syncGlobalWeight(val); }
function kwtSync(val) { syncGlobalWeight(val); }

function syncField(baseId, value) {
 const r = document.getElementById(baseId);
 const n = document.getElementById(baseId + '-n');
 const active = document.activeElement;
 // Never write back into whichever twin the user is actively typing in —
 // reassigning an input's own .value from inside its own oninput resets the
 // caret to the end and, for type="number", drops an in-progress trailing
 // "." (e.g. typing "2.5" got clipped back to "2" mid-keystroke). Only the
 // *other* twin (the one not focused) needs to be mirrored.
 if (r && r !== active) r.value = value;
 if (n && n !== active) n.value = value;
}

function syncWt(val) {
 let v = parseInt(val) || 60;
 v = Math.min(120, Math.max(30, v));
 document.getElementById('globalWt').value = v;
 document.getElementById('globalWtNum').value = v;
 updateAll();
}

const slidingScaleHTML = `
 <div style="margin-top:10px;overflow-x:auto">
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;font-size:11px;color:var(--text)">
   <div style="background:var(--surface2);padding:6px 4px 6px 18px;color:#10b981;font-weight:700;white-space:nowrap">CBG (mmol/L)</div>
   <div style="background:var(--surface2);padding:6px 4px 6px 10px;color:#10b981;font-weight:700;white-space:nowrap">Dose</div>
   <div style="background:var(--surface2);padding:6px 4px;color:#10b981;font-weight:700;white-space:nowrap">Action</div>

   <div style="padding:5px 4px 5px 18px;border-bottom:1px solid var(--border);white-space:nowrap"><span style="display:inline-grid;grid-template-columns:16px 14px 16px"><span style="text-align:right">8</span><span style="text-align:center">–</span><span>10</span></span></div>
   <div style="padding:5px 4px 5px 10px;border-bottom:1px solid var(--border);font-weight:700;color:#10b981;white-space:nowrap">2 units S/C</div>
   <div style="padding:5px 4px;border-bottom:1px solid var(--border);white-space:nowrap">Give S/C</div>

   <div style="padding:5px 4px 5px 18px;border-bottom:1px solid var(--border);white-space:nowrap"><span style="display:inline-grid;grid-template-columns:16px 14px 16px"><span style="text-align:right">10</span><span style="text-align:center">–</span><span>14</span></span></div>
   <div style="padding:5px 4px 5px 10px;border-bottom:1px solid var(--border);font-weight:700;color:#10b981;white-space:nowrap">4 units S/C</div>
   <div style="padding:5px 4px;border-bottom:1px solid var(--border);white-space:nowrap">Give S/C</div>

   <div style="padding:5px 4px 5px 18px;border-bottom:1px solid var(--border);white-space:nowrap"><span style="display:inline-grid;grid-template-columns:16px 14px 16px"><span style="text-align:right">14</span><span style="text-align:center">–</span><span>17</span></span></div>
   <div style="padding:5px 4px 5px 10px;border-bottom:1px solid var(--border);font-weight:700;color:#10b981;white-space:nowrap">6 units S/C</div>
   <div style="padding:5px 4px;border-bottom:1px solid var(--border);white-space:nowrap">Give S/C</div>

   <div style="padding:5px 4px 5px 18px;border-bottom:1px solid var(--border);white-space:nowrap"><span style="display:inline-grid;grid-template-columns:16px 14px 16px"><span style="text-align:right">17</span><span style="text-align:center">–</span><span>20</span></span></div>
   <div style="padding:5px 4px 5px 10px;border-bottom:1px solid var(--border);font-weight:700;color:#10b981;white-space:nowrap">8 units S/C</div>
   <div style="padding:5px 4px;border-bottom:1px solid var(--border);white-space:nowrap">Give S/C</div>

   <div style="padding:5px 4px 5px 18px;white-space:nowrap"><span style="display:inline-grid;grid-template-columns:16px 14px 16px"><span style="text-align:right">&gt;</span><span></span><span>20</span></span></div>
   <div style="padding:5px 4px 5px 10px;font-weight:700;color:#ef4444;white-space:nowrap">10 units S/C</div>
   <div style="padding:5px 4px;color:#ef4444;white-space:nowrap">Give S/C or start in S/P</div>
  </div>
 </div>`;

// Pulls the weight-based dose's actual unit (e.g. "mcg" or "mg") off the
// front of a drug's d.unit string (e.g. "mcg/kg slow IV" -> "mcg"), instead
// of assuming every weight-based drug is dosed in mg — Fentanyl is mcg/kg,
// and hardcoding " mg" on its calculated numbers was a real overdose-display
// risk (mcg numbers rendered with an "mg" label). Declared at top level (not
// nested inside renderBolus()) because updateBolusDoses() — a separate
// function that every weight slider's oninput funnels through — also calls
// it; nesting it inside renderBolus() left updateBolusDoses() throwing a
// silent ReferenceError on every weight change, which is why the header
// doses stopped updating at all after that fix.
function doseUnitLabel(u) {
 var m = /^([a-zA-Z]+)\//.exec(u || '');
 return m ? m[1] : 'mg';
}

function renderBolus() {
 const wt = getWt();
 let html = '';
 let lastGroup = null;

bolusData.forEach((d, i) => {
 if (d.group && d.group !== lastGroup) {
  if (lastGroup !== null) html += '</div>';
  html += `<div class="cat-block"><div class="cat-label">${d.group}</div>`;
  lastGroup = d.group;
 }
 const id = 'bc-' + i;
 const du = doseUnitLabel(d.unit);
 let doseText = d.doseMin === null ? 'See note'
 : d.doseMin === d.doseMax ? (d.doseMin * wt).toFixed(1) + ' ' + du
 : (d.doseMin * wt).toFixed(1) + ' - ' + (d.doseMax * wt).toFixed(1) + ' ' + du;

 let bodyContent = '';
 if (d.slidingScale) {
  bodyContent = `
  ${slidingScaleHTML}
  <div class="meta-row" style="margin-top:8px">
   <div class="meta-box"><div class="ml">Onset</div><div class="mv">${d.onset}</div></div>
   <div class="meta-box"><div class="ml">Duration</div><div class="mv">${d.duration}</div></div>
  </div>
  <div class="note-box" style="margin-top:8px">&#9200; Target CBG: 8–10 mmol/L<br>Check every 4–8 hrly (if stable CBG for last 12–24 hr)<br>But if CBG &ge;12 mmol/L, then check 2–4 hrly</div>`;
 } else if (d.doseMin === null) {
  bodyContent = `
  <div class="note-box" style="margin-top:10px">&#8505;&#65039; ${d.note.replace(/\n/g, '<br>&nbsp;&nbsp;')}</div>
  <div class="meta-row" style="margin-top:8px">
   <div class="meta-box"><div class="ml">Onset</div><div class="mv">${d.onset}</div></div>
   <div class="meta-box"><div class="ml">Duration</div><div class="mv">${d.duration}</div></div>
  </div>`;
 } else {
  bodyContent = `
  <div class="field-row" style="margin-top:8px">
   <div class="field-label">Weight (kg)</div>
   <div class="field-inputs">
    <input type="range" min="0.5" max="150" step="0.5" value="${wt}" id="bwt-${i}" oninput="syncGlobalWeight(this.value)" style="accent-color:${d.color}">
    <input type="number" min="0.5" max="150" value="${wt}" id="bwt-${i}-n" oninput="syncGlobalWeight(this.value)">
   </div>
  </div>
  <div class="meta-row">
   <div class="meta-box"><div class="ml">Onset</div><div class="mv">${d.onset}</div></div>
   <div class="meta-box"><div class="ml">Duration</div><div class="mv">${d.duration}</div></div>
  </div>
  <div class="note-box" style="margin-top:8px">&#8505;&#65039; ${d.note.replace(/\n/g, '<br>&nbsp;&nbsp;')}</div>`;
 }

 const headerRight = d.slidingScale
  ? `<div style="text-align:right;font-size:12px;font-weight:500;color:${d.color};font-family:'Open Sans',sans-serif;white-space:nowrap">Sliding Scale</div>`
  : d.headerLabel
  ? `<div style="text-align:right"><div style="font-size:13px;font-weight:400;color:${d.color}">${d.headerLabel}</div><div style="font-size:10px;color:var(--text-faint)">${d.unit}</div></div>`
  : d.doseMin !== null
  ? `<div style="text-align:right"><div style="font-size:13px;font-weight:400;color:${d.color}" id="bc-head-${i}">${doseText}</div><div style="font-size:10px;color:var(--text-faint)">${d.unit}</div></div>`
  : '';
 const nameSize = 'font-size:12px';
 const rightSize = 'font-size:12px';
 html += `<div class="bolus-card" id="${id}">
 <div class="bolus-header" onclick="toggleBolus('${id}')">
 <div class="drug-dot" style="color:${d.color}"></div>
 <div style="flex:1"><div class="drug-name" style="${nameSize}">${d.name}</div><div style="font-size:10px;color:var(--text-fainter)">${d.cat} <span class="bl" style="color:var(--text-faint)"></span> ${d.amp}</div></div>
 ${d.slidingScale && d.smallHeader ? `<div style="text-align:right;font-size:12px;font-weight:500;color:${d.color};font-family:'Open Sans',sans-serif;white-space:normal;max-width:72px;line-height:1.2;align-self:center;flex-shrink:0">acc. to<br>sliding scale</div>` : headerRight}
 </div>
 <div class="bolus-body">${bodyContent}
 </div>
 </div>`;
 });
 if (lastGroup !== null) html += '</div>';
 document.getElementById('bolus-list').innerHTML = html;
 if (typeof fitAllDrugNames === 'function') fitAllDrugNames();
}

// Lightweight refresh for weight-based bolus cards — updates text/slider values
// in place, without rebuilding the list (so dragging a bolus card's own weight
// slider doesn't get interrupted by an innerHTML rebuild mid-drag).
function updateBolusDoses(v) {
 bolusData.forEach((d, i) => {
  if (d.doseMin === null || d.slidingScale) return;
  const sl = document.getElementById('bwt-' + i), num = document.getElementById('bwt-' + i + '-n');
  if (sl) sl.value = v;
  if (num) num.value = v;
  const du = doseUnitLabel(d.unit);
  const doseText = d.doseMin === d.doseMax ? (d.doseMin * v).toFixed(1) + ' ' + du
   : (d.doseMin * v).toFixed(1) + ' - ' + (d.doseMax * v).toFixed(1) + ' ' + du;
  const wtLabel = document.getElementById('bc-wtlabel-' + i);
  if (wtLabel) wtLabel.textContent = v;
  const doseEl = document.getElementById('bc-dose-' + i);
  if (doseEl) doseEl.textContent = doseText;
  const headEl = document.getElementById('bc-head-' + i);
  if (headEl) headEl.textContent = doseText;
 });
}

function toggleBolus(id) { document.getElementById(id).classList.toggle('open'); }

window.noradConc = 160;
function calcNora(dose) {
 calcInfusion('nora', dose, 60, window.noradConc, 'mcg/kg/min');
 const d = parseFloat(dose);
 const overUsualMax = d > 0.5;
 const color = overUsualMax ? '#eab308' : '#22c55e';
 const slider = document.getElementById('range-nora');
 if (slider) slider.style.accentColor = color;
 const doseValEl = document.getElementById('dv-nora');
 if (doseValEl && doseValEl.parentElement) doseValEl.parentElement.style.color = color;
 const rateEl = document.getElementById('rate-nora');
 if (rateEl) rateEl.style.color = color;
}
function getMiniPanel(id) {
 return document.querySelector('.mini-select-panel[data-owner="' + id + '"]');
}
function closeAllMiniSelects() {
 document.querySelectorAll('.mini-select.open').forEach(function(el) {
  el.classList.remove('open');
  const panel = getMiniPanel(el.id);
  if (panel) {
   panel.classList.remove('open');
   if (panel.parentElement === document.body) {
    panel.style.position = ''; panel.style.top = ''; panel.style.left = ''; panel.style.minWidth = '';
    el.appendChild(panel);
   }
  }
 });
}
function toggleMiniSelect(e, id) {
 e.stopPropagation();
 const el = document.getElementById(id);
 const wasOpen = el.classList.contains('open');
 closeAllMiniSelects();
 if (wasOpen) return;
 const trigger = el.querySelector('.mini-select-trigger');
 const panel = getMiniPanel(id);
 if (!trigger || !panel) return;
 const r = trigger.getBoundingClientRect();
 panel.style.position = 'fixed';
 panel.style.top = (r.bottom + 3) + 'px';
 panel.style.left = r.left + 'px';
 panel.style.minWidth = Math.max(56, r.width) + 'px';
 document.body.appendChild(panel);
 panel.classList.add('open');
 el.classList.add('open');
}
document.addEventListener('click', function(e) {
 if (e.target.closest('.mini-select-panel') || e.target.closest('.mini-select-trigger')) return;
 closeAllMiniSelects();
});
window.addEventListener('scroll', closeAllMiniSelects, true);
window.addEventListener('resize', closeAllMiniSelects);
function pickNoradStrength(e, mg) {
 e.stopPropagation();
 const amt = parseFloat(mg);
 const conc = Math.round((amt * 1000) / 50);
 window.noradConc = conc;
 const trigEl = document.getElementById('mini-nora-strength-trigger');
 const concEl = document.getElementById('dil-nora-conc');
 if (trigEl) trigEl.textContent = amt + 'mg';
 if (concEl) concEl.textContent = conc;
 document.querySelectorAll('[data-owner="mini-nora-strength"] .mini-select-option').forEach(o => o.classList.remove('selected'));
 e.target.classList.add('selected');
 closeAllMiniSelects();
 const doseEl = document.getElementById('range-nora');
 if (doseEl) calcNora(doseEl.value);
}

function calcInfusion(id, dose, multiplier, conc, unit) {
 const wtEl = document.getElementById('cwt-' + id);
 const wt = wtEl ? parseFloat(wtEl.value) || 60 : getWt();
 const d = parseFloat(dose);
 const rate = ((d * wt * multiplier) / conc).toFixed(2);
 const isSmall = d < 1;
 const dec = unit.includes('kg/min') ? (isSmall ? 3 : 2) : 1;
 document.getElementById('dv-' + id).textContent = d.toFixed(dec);
 document.getElementById('rate-' + id).textContent = rate;
}

function calcThio() {
 const doseEl = document.getElementById('range-thio');
 const dvEl = document.getElementById('dv-thio');
 const rateEl = document.getElementById('rate-thio');
 if (!doseEl || !rateEl) return;
 const wtEl = document.getElementById('cwt-thio');
 const wt = wtEl ? parseFloat(wtEl.value) || 60 : getWt();
 const dose = parseFloat(doseEl.value) || 0;
 // Fixed dilution: 500mg × 5 vials, each reconstituted with 10ml diluent,
 // pooled to 50ml → conc fixed at 50mg/ml.
 const conc = 50;
 if (dvEl) dvEl.textContent = dose.toFixed(1);
 rateEl.textContent = ((dose * wt) / conc).toFixed(2);
 // Digit-only color cue (slider itself stays a fixed color): green for the
 // typical 3-5mg/kg/hr maintenance range, amber once past 5mg/kg/hr into
 // the extended/refractory range.
 const overTypicalMax = dose > 5;
 const color = overTypicalMax ? '#f59e0b' : '#10b981';
 if (dvEl && dvEl.parentElement) dvEl.parentElement.style.color = color;
 rateEl.style.color = color;
}

function calcNAC() {
 const amtEl = document.getElementById('nac-amt');
 const rateEl = document.getElementById('rate-nac');
 if (!amtEl || !rateEl) return;
 const wtEl = document.getElementById('cwt-nac');
 const wt = wtEl ? parseFloat(wtEl.value) || 60 : getWt();
 const vol = window.nacVol || 200;
 const durationHr = vol === 1000 ? 10 : 2;
 const perKg = vol === 1000 ? 200 : 100;
 const unit = window.nacUnit || 'mg';

 // Auto-fill the suggested weight-based dose, but never overwrite while the
 // user is actively typing their own drawn-up amount into the field.
 if (document.activeElement !== amtEl) {
  const suggestedMg = perKg * wt;
  amtEl.value = unit === 'gm' ? (suggestedMg / 1000).toFixed(2) : suggestedMg.toFixed(0);
 }

 const rawAmt = parseFloat(amtEl.value) || 0;
 const amtMg = unit === 'gm' ? rawAmt * 1000 : rawAmt;
 if (durationHr) {
  const formatted = (amtMg / durationHr).toFixed(1);
  rateEl.textContent = formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;
 } else {
  rateEl.textContent = '—';
 }
}

function pickNacUnit(e, val) {
 e.stopPropagation();
 window.nacUnit = val;
 const trigEl = document.getElementById('mini-nac-unit-trigger');
 if (trigEl) trigEl.textContent = val;
 document.querySelectorAll('[data-owner="mini-nac-unit"] .mini-select-option').forEach(o => o.classList.remove('selected'));
 e.target.classList.add('selected');
 closeAllMiniSelects();
 calcNAC();
}

function pickNacVol(e, val) {
 e.stopPropagation();
 window.nacVol = val;
 const trigEl = document.getElementById('mini-nac-vol-trigger');
 if (trigEl) trigEl.textContent = val + 'ml';
 document.querySelectorAll('[data-owner="mini-nac-vol"] .mini-select-option').forEach(o => o.classList.remove('selected'));
 e.target.classList.add('selected');
 closeAllMiniSelects();
 calcNAC();
}

function calcFixed(id, val) {
 document.getElementById('dv-' + id).textContent = val;
 document.getElementById('rate-' + id).textContent = val;
}

function calcVaso(dose) {
 const d = parseFloat(dose);
 const rate = ((d * 60) / 0.4).toFixed(1);
 document.getElementById('dv-vaso').textContent = d.toFixed(2);
 document.getElementById('rate-vaso').textContent = rate;
}

function calcOctreo(dose) {
 const d = parseFloat(dose);
 const rate = (d / 20).toFixed(2);
 document.getElementById('dv-octreo').textContent = d.toFixed(0);
 document.getElementById('rate-octreo').textContent = rate;
}

function calcGTN(dose) {
 const rate = ((parseFloat(dose) * 60) / 1000).toFixed(1);
 document.getElementById('dv-gtn').textContent = dose;
 document.getElementById('rate-gtn').textContent = rate;
}

function calcIsop(dose) {
 // 2mg in 50ml = 40 mcg/ml → ml/hr = mcg/min × 60 ÷ 40 = mcg/min × 1.5
 const d = parseFloat(dose);
 document.getElementById('dv-isop').textContent = d;
 document.getElementById('rate-isop').textContent = (d * 1.5).toFixed(2);
}

function calcLasix(dose) {
 const rate = (parseFloat(dose) / 2).toFixed(1);
 document.getElementById('dv-lasix').textContent = dose;
 document.getElementById('rate-lasix').textContent = rate;
}

function calcBicarb() {
 const wtEl = document.getElementById('bicarb-wt');
 const wt = wtEl ? (parseFloat(wtEl.value) || 60) : getWt();
 const bdEl = document.getElementById('bicarb-bd');
 if (!bdEl) return;
 const bd = parseFloat(bdEl.value) || 10;
 const fullDeficit = 0.3 * bd * wt;
 const practicalDose = fullDeficit / 2;
 const practicalBottles = Math.ceil(practicalDose / 22);
 document.getElementById('bicarb-result-practical').textContent = practicalDose.toFixed(0) + ' mmol → ' + practicalBottles + ' bottles (' + (practicalBottles * 25) + ' ml)';
 document.getElementById('bicarb-result-practical-detail').textContent = '0.3 × ' + bd + ' × ' + wt + ' ÷ 2 = ' + practicalDose.toFixed(0) + ' mmol | Give half now, reassess ABG before completing correction';

 const fullBottles = Math.ceil(fullDeficit / 22);
 document.getElementById('bicarb-result-full').textContent = fullDeficit.toFixed(0) + ' mmol → ' + fullBottles + ' bottles (' + (fullBottles * 25) + ' ml)';
 document.getElementById('bicarb-result-full-detail').textContent = '0.3 × ' + bd + ' × ' + wt + ' = ' + fullDeficit.toFixed(0) + ' mmol total | This is what gets halved above for safety';
}

function calcK() {
 const wtEl = document.getElementById('k-wt');
 const wt = wtEl ? (parseFloat(wtEl.value) || 60) : getWt();
 const kEl = document.getElementById('k-val');
 if (!kEl) return;
 const k = parseFloat(kEl.value) || 2.5;
 const deficit = ((4 - k) * wt / 2);
 document.getElementById('k-result').textContent = deficit.toFixed(0) + ' mmol total  ~ ' + Math.ceil(deficit / 10) + ' hrs at 10mmol/hr';

 const dailyReq = 1 * wt;
 const totalWithDaily = deficit + dailyReq;
 document.getElementById('k-result-total').textContent = totalWithDaily.toFixed(0) + ' mmol total (≈ ' + Math.ceil(totalWithDaily/20) + ' amp)';
 document.getElementById('k-result-total-detail').textContent = 'Deficit ' + deficit.toFixed(0) + ' + Maintenance ' + dailyReq.toFixed(0) + ' (1mmol/kg/day) = ' + totalWithDaily.toFixed(0) + ' mmol over 24hr';
}

function calcAmio() {
 const el = document.getElementById('amio-result');
 if (!el) return;
 const wt = getWt();
 const bolus = (5 * wt).toFixed(0);
 const maint = (15 * wt).toFixed(0);
 el.innerHTML = 'Bolus: ' + bolus + 'mg (' + Math.ceil(bolus/150) + ' amp)<br>Maintenance: ' + maint + 'mg/24hr (' + Math.ceil(maint/150) + ' amp)';
}

function calcHeparin() {
 const aptt = parseFloat(document.getElementById('aptt-val-n').value) || 60;
 const wt = parseFloat(document.getElementById('hep-wt-n').value) || 60;
 let action, detail, bolusIU = 0, rateChange = 0, holdMsg = '';

 if (aptt < 35) {
 action = '⬆️ Bolus 80 IU/kg + increase rate';
 detail = 'PTT < 35s (ratio < 1.2): Subtherapeutic';
 bolusIU = 80; rateChange = 4;
 } else if (aptt <= 45) {
 action = '⬆️ Bolus 40 IU/kg + increase rate';
 detail = 'PTT 35–45s (ratio 1.3–1.5): Below target';
 bolusIU = 40; rateChange = 2;
 } else if (aptt <= 70) {
 action = '✅ No change — therapeutic range';
 detail = 'PTT 46–70s (ratio 1.5–2.3): Target achieved';
 bolusIU = 0; rateChange = 0;
 } else if (aptt <= 90) {
 action = '⬇️ Decrease rate, no bolus';
 detail = 'PTT 71–90s (ratio 2.3–3.0): Slightly supratherapeutic';
 bolusIU = 0; rateChange = -2;
 } else {
 action = '🛑 Stop infusion 1hr, then decrease rate';
 detail = 'PTT > 90s (ratio > 3): Markedly elevated';
 bolusIU = 0; rateChange = -3;
 holdMsg = 'Hold infusion for 1 hour, then restart at reduced rate';
 }

 const isLight = document.body.getAttribute('data-theme') === 'light';
 const hepColor = isLight ? '#1d4ed8' : '#93c5fd';
 document.getElementById('hep-action').textContent = action;
 document.getElementById('hep-action').style.color = hepColor;
 document.getElementById('hep-init').style.color = hepColor;
 document.getElementById('hep-detail').textContent = detail + (holdMsg ? ' | ' + holdMsg : '');

 const bolusDose = (bolusIU * wt).toFixed(0);
 const rateChangeDose = (Math.abs(rateChange) * wt / 100).toFixed(2);
 let initText = '';
 if (bolusIU > 0) {
 initText += 'Bolus: ' + bolusDose + ' units (' + (bolusDose/100).toFixed(2) + ' ml)';
 }
 if (rateChange !== 0) {
 initText += (initText ? ' | ' : '') + (rateChange > 0 ? '+' : '−') + Math.abs(rateChange) + ' IU/kg/hr (' + rateChangeDose + ' ml/hr change)';
 }
 if (!initText) initText = 'No bolus, no rate change';
 document.getElementById('hep-init').textContent = initText;
}

function calcPheny() {
 const wt = getWt();
 const dose = (15 * wt).toFixed(0);
 const amps = Math.ceil(dose / 100);
 document.getElementById('pheny-result').textContent = dose + 'mg = ' + amps + ' amps → give over ' + amps + ' min';
}

function updateAll() {
 const g = id => { const el = document.getElementById(id); return el ? el.value : null; };
 try {
  if (g('range-nora')) calcInfusion('nora', g('range-nora'), 60, window.noradConc || 160, 'mcg/kg/min');
  if (g('range-vaso')) calcVaso(g('range-vaso'));
  if (g('range-adren')) calcInfusion('adren', g('range-adren'), 60, 160, 'mcg/kg/min');
  if (g('range-dopa')) calcInfusion('dopa', g('range-dopa'), 60, 8000, 'mcg/kg/min');
  if (g('range-dobu')) calcInfusion('dobu', g('range-dobu'), 60, 10000, 'mcg/kg/min');
  if (g('range-fent')) calcInfusion('fent', g('range-fent'), 1, 10, 'mcg/kg/hr');
  if (g('range-dex')) calcInfusion('dex', g('range-dex'), 1, 4, 'mcg/kg/hr');
  if (g('range-labet')) calcInfusion('labet', g('range-labet'), 60, 2000, 'mcg/kg/min');
  if (g('range-prop')) calcInfusion('prop', g('range-prop'), 1, 10, 'mg/kg/hr');
  if (g('range-midaz')) calcInfusion('midaz', g('range-midaz'), 1, 0.3, 'mg/kg/hr');
  if (g('range-thio')) calcThio();
  if (g('range-ket')) calcInfusion('ket', g('range-ket'), 60, 10000, 'mcg/kg/min');
  if (g('range-gtn')) calcGTN(g('range-gtn'));
  if (g('range-isop')) calcIsop(g('range-isop'));
  if (g('range-lasix')) calcLasix(g('range-lasix'));
  if (g('range-somato')) calcInfusion('somato', g('range-somato'), 1, 60, 'mcg/kg/hr');
  if (g('range-octreo')) calcOctreo(g('range-octreo'));
  if (g('range-kcl')) calcFixed('kcl', g('range-kcl'));
  if (g('range-ins')) calcFixed('ins', g('range-ins'));
  if (g('range-midmor')) calcFixed('midmor', g('range-midmor'));
  if (g('cwt-nac')) calcNAC();
 } catch(e) {}
 try { calcBicarb(); } catch(e) {}
 try { calcK(); } catch(e) {}
 try { calcAmio(); } catch(e) {}
 try { calcHeparin(); } catch(e) {}
 try { updateBolusDoses(getWt()); } catch(e) {}
 try { updateSEDoses(); } catch(e) {}
}

function toggleCard(id) { document.getElementById('card-' + id).classList.toggle('open'); }
function toggleDefibECG(id) { document.getElementById(id).classList.toggle('open'); }

// Closes the ECG expand modal only when the tap was on the dark backdrop
// itself (not bubbled up from the modal's inner content), since the ✕
// button already closes it directly via its own inline handler.
function closeECGModal(event) {
  if (event.target && event.target.id === 'ecg-modal') {
    document.getElementById('ecg-modal').classList.remove('open');
  }
}


function toggleAHT(id) { document.getElementById(id).classList.toggle('open'); }

// Single shared clock driving every tab capsule's shine sweep. Reading a
// mid-animation custom-property value back out via getComputedStyle proved
// unreliable on mobile Chrome/WebView (it silently stopped advancing after
// the first switch), so instead of trying to "read" the outgoing tab's
// current angle, every tab's shine is computed from the same elapsed-time
// formula. Whichever tab is active always shows exactly what this shared
// clock says *right now*, so handing off between tabs is automatically
// continuous — no capture/carry step needed.
var TAB_SHINE_PERIOD_MS = 3200;
var __tabShineEpoch = (window.performance && performance.now) ? performance.now() : Date.now();
function currentShineAngleDeg() {
  var now = (window.performance && performance.now) ? performance.now() : Date.now();
  var elapsed = (now - __tabShineEpoch) % TAB_SHINE_PERIOD_MS;
  return (elapsed / TAB_SHINE_PERIOD_MS) * 360;
}

function showTab(name, btn) {
 document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
 document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
 document.getElementById('tab-' + name).classList.add('active');
 // A negative animation-delay makes the browser act as though the animation
 // had already been running for that long — it jumps straight into that
 // point of the (always full-speed, always 0→360) cycle and keeps advancing
 // normally from there. This is what actually gives seamless continuity:
 // earlier we tried overriding the *starting value* of --tab-angle instead,
 // but that turns every cycle into a shorter sweep toward a fixed 360deg
 // endpoint — uneven speed, plus a visible backward snap every loop back to
 // that starting value. Negative delay has neither problem.
 btn.style.animationDelay = (-((currentShineAngleDeg() / 360) * TAB_SHINE_PERIOD_MS)) + 'ms';
 // Force a reflow before re-adding .active: without this, removing and
 // re-adding the same animated class in one synchronous tick gets coalesced
 // by the browser (it never sees a real "stop"), so the delay we just set
 // is ignored and the shine stops advancing.
 void btn.offsetWidth;
 btn.classList.add('active');
 document.body.setAttribute('data-active-tab', name);
 if (name === 'bolus') renderBolus();
 if (name === 'special' && typeof scheduleSpecialCompactFit === 'function') {
  scheduleSpecialCompactFit();
 } else if (typeof specialGapModeOff === 'function') {
  specialGapModeOff();
 }
 if (name === 'defib' && typeof scheduleDefibCompactFit === 'function') {
  scheduleDefibCompactFit();
 } else if (typeof defibGapModeOff === 'function') {
  defibGapModeOff();
 }
 if (name === 'special' && typeof alignAllSubCardWidths === 'function') setTimeout(alignAllSubCardWidths, 50);
 if (name === 'defib' && typeof fitEcgTitle === 'function') fitEcgTitle();
 if (typeof fitAllDrugNames === 'function') fitAllDrugNames();
 if (typeof navSaveState === 'function') navSaveState();
}

// ── Hamburger menu ──
function openMenu() {
 const panel = document.getElementById('menuPanel');
 const overlay = document.getElementById('menuOverlay');

 overlay.classList.add('open');
 panel.style.display = 'flex';
 panel.offsetHeight; // force reflow
 panel.classList.add('open');
 document.body.style.overflow = 'hidden';

 const wt = parseFloat(document.getElementById('globalWt').value) || 60;
 document.getElementById('menu-wt-slider').value = wt;
 document.getElementById('menu-wt-num').value = wt;
 const tabs = ['bolus','infusion','special','defib'];
 tabs.forEach(t => {
  const b = document.getElementById('mtab-' + t);
  if (b) b.classList.toggle('active-tab', !!document.getElementById('tab-' + t)?.classList.contains('active'));
 });
}
function closeMenu() {
 const panel = document.getElementById('menuPanel');
 const overlay = document.getElementById('menuOverlay');
 panel.classList.remove('open');
 overlay.classList.remove('open');
 document.body.style.overflow = '';
 setTimeout(function() {
  if (!panel.classList.contains('open')) panel.style.display = 'none';
 }, 200);
}
function menuGoTab(name) {
 const tabBtns = document.querySelectorAll('.tab-btn');
 const tabMap = { bolus: 0, infusion: 1, special: 2, defib: 3 };
 const idx = tabMap[name];
 if (idx !== undefined && tabBtns[idx]) showTab(name, tabBtns[idx]);
 closeMenu();
 window.scrollTo({ top: 0, behavior: 'smooth' });
}
function menuWtSync(val) {
 const v = Math.min(120, Math.max(30, parseInt(val) || 60));
 document.getElementById('menu-wt-slider').value = v;
 document.getElementById('menu-wt-num').value = v;
}
function menuWtAutoApply(val) { syncGlobalWeight(val); }
function applyGlobalWt() { menuWtAutoApply(document.getElementById('menu-wt-num').value); closeMenu(); }

// Theme (data-theme attribute + theme-color/status-bar meta) is already
// applied by the inline script right after <body> — this early placement
// is what lets a pull-to-refresh or app relaunch actually re-sync the OS
// status bar to the last-picked theme. Nothing further to do here except
// re-sync the icon state below.

window.addEventListener('load', function() {
 updateAll();
 try { calcNEWS2(); } catch(e) {}
 try { calcGCS(); } catch(e) {}
 try { calcAPACHE(); } catch(e) {}
 try { calcSIADH(); } catch(e) {}
 try { calcCa(); } catch(e) {}
 try { calcDIC(); } catch(e) {}
 try { calcHemolysis(); } catch(e) {}
 try { calcCrCl(); } catch(e) {}
 try { rdacBuildDropdown(); rdacBuildShortList(); } catch(e) {}
 try { calcMentzer(); idaUpdateTarget(); calcGanzoni(); calcTable(); calcIron(); calcOral(); calcIV(); } catch(e) {}
 try { thyBuildChecklists(); calcThyroid(); } catch(e) {}
 try { calcMAP(); } catch(e) {}
 try { calcFWD(); } catch(e) {}
 try { calcSOFA(); } catch(e) {}
 try { calcARDS(); } catch(e) {}
 try { calcABG(); } catch(e) {}
 renderBolus();
 if (typeof navRestoreState === 'function') navRestoreState();
 if (typeof scheduleSpecialCompactFit === 'function') scheduleSpecialCompactFit();
 // Sync theme icons after load
 const theme = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
 applyTheme(theme);
});

function calcCa() {
 const caUnit = window.caUnit || 'si';
 let caRaw  = parseFloat(document.getElementById('ca-val-n').value)  || 2.0;
 let albRaw = parseFloat(document.getElementById('alb-val-n').value) || 25;
 // Convert to SI for formula
 const ca_si  = caUnit === 'us' ? caRaw / 4.0  : caRaw;   // mg/dL ÷ 4 = mmol/L
 const alb_si = caUnit === 'us' ? albRaw * 10   : albRaw;  // g/dL × 10 = g/L
 const corrected_si = +(ca_si + 0.02 * (40 - alb_si)).toFixed(3);
 const corrected_us = +(corrected_si * 4.0).toFixed(2);
 const dispVal = caUnit === 'us'
  ? corrected_us.toFixed(1) + ' mg/dL'
  : corrected_si.toFixed(2) + ' mmol/L';
 document.getElementById('ca-result-val').textContent = dispVal;
 document.getElementById('ca-formula-note').textContent = caUnit === 'us'
  ? 'Formula: Corrected Ca = Measured Ca + 0.8 × (4 − Albumin g/dL)'
  : 'Formula: Corrected Ca = Measured Ca + 0.02 × (40 − Albumin g/L)';
 const box = document.getElementById('ca-result-box');
 let interp, color;
 if      (corrected_si < 1.75)  { interp = '🔴 Severe hypocalcaemia'; color = '#ef4444'; }
 else if (corrected_si < 2.12)  { interp = '🟡 Hypocalcaemia'; color = '#f59e0b'; }
 else if (corrected_si <= 2.52) { interp = '✅ Normal'; color = '#10b981'; }
 else if (corrected_si <= 3.0)  { interp = '🟡 Hypercalcaemia'; color = '#f59e0b'; }
 else                           { interp = '🔴 Severe hypercalcaemia'; color = '#ef4444'; }
 const interpEl = document.getElementById('ca-result-interp');
 interpEl.style.color = color; interpEl.textContent = interp;
 box.style.borderColor = color + '60';
}

function setCaUnit(unit) {
 window.caUnit = unit;
 const si = unit === 'si';
 // Toggle button styles
 document.getElementById('ca-unit-si').style.borderColor  = si ? '#06b6d4' : 'var(--border-strong)';
 document.getElementById('ca-unit-si').style.background    = si ? '#06b6d422' : 'transparent';
 document.getElementById('ca-unit-si').style.color         = si ? '#06b6d4' : 'var(--text-faint)';
 document.getElementById('ca-unit-si').style.fontWeight    = si ? '700' : '600';
 document.getElementById('ca-unit-us').style.borderColor  = !si ? '#06b6d4' : 'var(--border-strong)';
 document.getElementById('ca-unit-us').style.background    = !si ? '#06b6d422' : 'transparent';
 document.getElementById('ca-unit-us').style.color         = !si ? '#06b6d4' : 'var(--text-faint)';
 document.getElementById('ca-unit-us').style.fontWeight    = !si ? '700' : '600';
 // Update labels and slider ranges
 document.getElementById('ca-label').innerHTML  = si ? 'Serum <span style="text-transform:none">Ca<sup>2+</sup></span> (mmol/L)' : 'Serum <span style="text-transform:none">Ca<sup>2+</sup></span> (mg/dL)';
 document.getElementById('alb-label').textContent = si ? 'Serum Albumin (g/L)' : 'Serum Albumin (g/dL)';
 const caSlider = document.getElementById('ca-val');
 const albSlider = document.getElementById('alb-val');
 const caNum    = document.getElementById('ca-val-n');
 const albNum   = document.getElementById('alb-val-n');
 if (si) {
  caSlider.min='1.5'; caSlider.max='3.5'; caSlider.step='0.05'; caSlider.value='2.0'; caNum.min='1.5'; caNum.max='3.5'; caNum.step='0.05'; caNum.value='2.0';
  albSlider.min='10'; albSlider.max='50'; albSlider.step='1'; albSlider.value='25'; albNum.min='10'; albNum.max='50'; albNum.step='1'; albNum.value='25';
 } else {
  caSlider.min='6'; caSlider.max='14'; caSlider.step='0.2'; caSlider.value='8.0'; caNum.min='6'; caNum.max='14'; caNum.step='0.2'; caNum.value='8.0';
  albSlider.min='1'; albSlider.max='5'; albSlider.step='0.1'; albSlider.value='2.5'; albNum.min='1'; albNum.max='5'; albNum.step='0.1'; albNum.value='2.5';
 }
 syncField('ca-val', si ? '2.0' : '8.0');
 syncField('alb-val', si ? '25' : '2.5');
 calcCa();
}

function calcCrCl() {
 const age = parseFloat(document.getElementById('crcl-age-n').value) || 50;
 const wt  = parseFloat(document.getElementById('crcl-wt-n').value)  || 60;
 const cr  = parseFloat(document.getElementById('crcl-cr-n').value)  || 1.0;
 const sex = document.querySelector('input[name="crcl-sex"]:checked')?.value || 'male';
 const factor = sex === 'female' ? 0.85 : 1.0;
 const crcl = +((((140 - age) * wt * factor) / (72 * cr))).toFixed(1);
 document.getElementById('crcl-result-val').textContent = crcl + ' ml/min';
 const stageEl = document.getElementById('crcl-result-stage');
 const doseEl  = document.getElementById('crcl-result-dose');
 let stage, color, dose;
 if      (crcl >= 90)  { stage='G1 — Normal / High'; color='#10b981'; dose='Standard doses for renally-cleared drugs'; }
 else if (crcl >= 60)  { stage='G2 — Mildly reduced'; color='#10b981'; dose='Standard doses usually safe; monitor vancomycin trough'; }
 else if (crcl >= 45)  { stage='G3a — Mildly–moderately reduced'; color='#f59e0b'; dose='↓ Enoxaparin, metformin caution, digoxin dose ↓'; }
 else if (crcl >= 30)  { stage='G3b — Moderately–severely reduced'; color='#f59e0b'; dose='Stop metformin; ↓ LMWH; extended interval aminoglycosides'; }
 else if (crcl >= 15)  { stage='G4 — Severely reduced'; color='#ef4444'; dose='Avoid LMWH → UFH; dabigatran CI; avoid NSAIDs; nephrology consult'; }
 else                  { stage='G5 — Kidney failure'; color='#ef4444'; dose='Dialysis consideration; most renally-cleared drugs CI or very ↓ dose'; }
 stageEl.textContent = stage; stageEl.style.color = color;
 stageEl.style.fontSize = stage.length > 30 ? '10px' : stage.length > 20 ? '11px' : '12px';
 doseEl.innerHTML = dose;
 try { calcRdac(); } catch(e) {}
}

/* ══════════ CKD Staging (KDIGO: GFR category + albuminuria category) ══════════ */
var CKD_G = [
  { k:'G1',  lab:'≥90',   c:['g','y','o'], f:['1','1','2'],   d:'normal/high' },
  { k:'G2',  lab:'60–89', c:['g','y','o'], f:['1','1','2'],   d:'mildly ↓' },
  { k:'G3a', lab:'45–59', c:['y','o','r'], f:['1','2','3'],   d:'mildly–moderately ↓' },
  { k:'G3b', lab:'30–44', c:['o','r','r'], f:['2','3','3'],   d:'moderately–severely ↓' },
  { k:'G4',  lab:'15–29', c:['r','r','r'], f:['3','3','4+'],  d:'severely ↓' },
  { k:'G5',  lab:'&lt;15', c:['r','r','r'], f:['4+','4+','4+'], d:'kidney failure' }
];
var CKD_RISK = { g:'Low risk (if no other markers of kidney disease, no CKD)', y:'Moderately increased risk', o:'High risk', r:'Very high risk' };
var CKD_COL  = { g:'#10b981', y:'#f59e0b', o:'#f97316', r:'#ef4444' };

function ckdRadio(name, dflt) {
  var el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : dflt;
}

function ckdVal(id, dflt) {
  var el = document.getElementById(id);
  return el ? el.value : dflt;
}

function ckdToggleCruDd(e) {
  e.stopPropagation();
  var wrap = document.getElementById('ckdDdWrap-cru');
  var wasOpen = wrap.classList.contains('open');
  thyCloseAllUnitDd();
  if (!wasOpen) wrap.classList.add('open');
}

function ckdSetCruUnit(unit, optEl) {
  var hidden = document.getElementById('ckd-cru');
  var oldUnit = hidden.value;
  if (unit !== oldUnit) {
    var numEl = document.getElementById('ckd-scr');
    var current = parseFloat(numEl.value);
    if (isFinite(current)) numEl.value = unit === 'um' ? +(current * 88.4).toFixed(0) : +(current / 88.4).toFixed(2);
  }
  hidden.value = unit;
  document.getElementById('ckdUnitLabel-cru').textContent = optEl.textContent;
  document.querySelectorAll('#ckdUnitPanel-cru .thy-unit-dd-opt').forEach(function (o) { o.classList.remove('selected'); });
  optEl.classList.add('selected');
  thyCloseAllUnitDd();
  calcCkd();
}

function calcCkd() {
  var mode = ckdRadio('ckd-mode', 'calc');
  var crU  = ckdVal('ckd-cru', 'mg');
  var acrU = ckdRadio('ckd-acru', 'mgg');
  var out  = document.getElementById('ckd-result-box');
  if (!out) return;

  document.getElementById('ckd-calc-in').style.display   = mode === 'calc' ? '' : 'none';
  document.getElementById('ckd-direct-in').style.display = mode === 'calc' ? 'none' : '';
  document.getElementById('ckd-scr').placeholder = crU === 'um' ? 'e.g. 124' : 'e.g. 1.4';
  document.getElementById('ckd-acr').placeholder = acrU === 'mgmmol' ? 'e.g. 13' : 'e.g. 120';

  var msg = function (t) {
    out.innerHTML = '<div style="font-size:11px;line-height:1.65;color:var(--text-muted)">' + t + '</div>';
  };

  var egfr;
  if (mode === 'calc') {
    var scr = parseFloat(document.getElementById('ckd-scr').value);
    var age = parseFloat(document.getElementById('ckd-age').value);
    if (!(scr > 0) || !(age >= 18 && age <= 120)) { msg('Enter creatinine and age (≥18) to stage.'); return; }
    if (crU === 'um') scr = scr / 88.4;
    var fem = ckdRadio('ckd-sex', 'M') === 'F';
    var kap = fem ? 0.7 : 0.9, alp = fem ? -0.241 : -0.302, r = scr / kap;
    egfr = 142 * Math.pow(Math.min(r, 1), alp) * Math.pow(Math.max(r, 1), -1.2) * Math.pow(0.9938, age) * (fem ? 1.012 : 1);
  } else {
    egfr = parseFloat(document.getElementById('ckd-direct').value);
    if (!(egfr > 0)) { msg('Enter an eGFR value to stage.'); return; }
  }

  var gi = egfr >= 90 ? 0 : egfr >= 60 ? 1 : egfr >= 45 ? 2 : egfr >= 30 ? 3 : egfr >= 15 ? 4 : 5;
  var g  = CKD_G[gi];
  var acr = parseFloat(document.getElementById('ckd-acr').value), ai = -1;
  if (acr >= 0) { var mgg = acrU === 'mgmmol' ? acr * 8.84 : acr; ai = mgg < 30 ? 0 : mgg <= 300 ? 1 : 2; }
  var AL = ['A1', 'A2', 'A3'];
  var AD = ['&lt;30 mg/g (&lt;3 mg/mmol)', '30–300 mg/g (3–30 mg/mmol)', '&gt;300 mg/g (&gt;30 mg/mmol)'];
  var col = ai >= 0 ? g.c[ai] : (gi >= 4 ? 'r' : gi === 3 ? 'o' : gi === 2 ? 'y' : 'g');
  var C = CKD_COL[col];

  var h = '<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap">' +
    '<div><div class="ckd-lbl no-upper" style="margin-bottom:3px;font-size:12px">eGFR <span style="text-transform:none;letter-spacing:0">(mL/min/1.73m²)</span></div>' +
    '<div style="font-family:var(--numfont);font-size:26px;font-weight:900;line-height:1;color:' + C + '">' + (egfr >= 10 ? Math.round(egfr) : egfr.toFixed(1)) + '</div></div>' +
    '<div class="ckd-chip" style="color:' + C + ';border-color:' + C + '">' + g.k + (ai >= 0 ? ' ' + AL[ai] : '') + '</div></div>';

  h += '<div class="ckd-kv"><span>GFR category</span><span>' + g.k + ' (' + g.lab + ') — ' + g.d + '</span>';
  if (ai >= 0) {
    h += '<span>Albuminuria</span><span>' + AL[ai] + ' (' + AD[ai] + ')</span>' +
         '<span>Risk</span><span style="color:' + C + '">' + CKD_RISK[g.c[ai]] + '</span>' +
         '<span>Monitoring</span><span>' + g.f[ai] + '×/year</span>';
  } else {
    h += '<span>Albuminuria</span><span>Not entered — add ACR for full staging</span>';
  }
  h += '</div>';

  if (gi >= 4 || ai === 2) h += '<div style="font-size:11px;line-height:1.6;color:var(--text-muted);margin-top:8px"><strong style="color:var(--text-strong)">Nephrology referral</strong> advised (eGFR &lt;30 or ACR &gt;300 mg/g).</div>';
  if (ai === 0 && gi <= 1) h += '<div style="font-size:11px;line-height:1.6;color:var(--text-muted);margin-top:8px">G1/G2 with A1 is not CKD unless other evidence of kidney damage (imaging, sediment, histology, tubular disorders) is present.</div>';

  h += '<div class="ckd-sec">KDIGO heat map <span class="bl"></span> monitoring (×/year)</div><div class="ckd-grid"><div></div>';
  AL.forEach(function (a, i) { h += '<div class="ckd-h">' + a + '<br>' + ['&lt;30', '30–300', '&gt;300'][i] + '</div>'; });
  CKD_G.forEach(function (row, ri) {
    h += '<div class="ckd-h">' + row.k + '<br>' + row.lab + '</div>';
    row.c.forEach(function (c, ci) {
      var on = (ri === gi) && (ai < 0 || ci === ai);
      h += '<div class="ckd-c ' + c + (on ? ' on' : '') + '">' + row.f[ci] + '</div>';
    });
  });
  h += '</div><div style="font-size:9.5px;line-height:1.5;color:var(--text-faint);margin-top:6px">Green low <span class="bl"></span> Yellow moderate <span class="bl"></span> Orange high <span class="bl"></span> Red very high risk. ACR cut-offs in mg/g.</div>';
  out.innerHTML = h;
}

/* ══════════ Renal Dose Adjustment Calculator ══════════ */
var rdacDrugList = [
 { id:'gentamicin', name:'Gentamicin', category:'Antibiotics', type:'calc' },
 { id:'amikacin', name:'Amikacin', category:'Antibiotics', type:'calc' },
 { id:'pipTazo', name:'Piperacillin-Tazobactam', category:'Antibiotics', type:'calc' },
 { id:'meropenem', name:'Meropenem', category:'Antibiotics', type:'calc' },
 { id:'cefepime', name:'Cefepime', category:'Antibiotics', type:'calc' },
 { id:'ceftazidime', name:'Ceftazidime', category:'Antibiotics', type:'calc' },
 { id:'fluconazole', name:'Fluconazole', category:'Antibiotics', type:'calc' },
 { id:'acyclovir', name:'Acyclovir (IV)', category:'Antibiotics', type:'calc' },
 { id:'ganciclovir', name:'Ganciclovir (induction)', category:'Antibiotics', type:'calc' },
 { id:'vancomycin', name:'Vancomycin (IV)', category:'Antibiotics', type:'calc', guided:true },
 { id:'colistin', name:'Colistin (Colistimethate)', category:'Antibiotics', type:'calc', guided:true },
 { id:'ceftriaxone', name:'Ceftriaxone', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed (primarily biliary excretion) — standard 1-2 g q24h regardless of CrCl.' },
 { id:'azithromycin', name:'Azithromycin', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed — hepatobiliary elimination.' },
 { id:'moxifloxacin', name:'Moxifloxacin', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed — predominantly hepatic/non-renal elimination.' },
 { id:'doxycycline', name:'Doxycycline', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed.' },
 { id:'rifampin', name:'Rifampin', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed — hepatic elimination.' },
 { id:'aztreonam', name:'Aztreonam', category:'Antibiotics', type:'calc' },
 { id:'ceftazAvibactam', name:'Ceftazidime-avibactam', category:'Antibiotics', type:'calc' },
 { id:'cefoperSulbactam', name:'Cefoperazone-sulbactam', category:'Antibiotics', type:'calc' },
 { id:'imipenemCilastatin', name:'Imipenem-cilastatin', category:'Antibiotics', type:'calc' },
 { id:'metronidazole', name:'Metronidazole', category:'Antibiotics', type:'calc' },
 { id:'clindamycin', name:'Clindamycin', category:'Antibiotics', type:'calc' },
 { id:'tmpSmx', name:'Trimethoprim-sulfamethoxazole', category:'Antibiotics', type:'calc' },
 { id:'linezolid', name:'Linezolid', category:'Antibiotics', type:'calc' },
 { id:'tigecycline', name:'Tigecycline', category:'Antibiotics', type:'calc' },
 { id:'clarithromycin', name:'Clarithromycin', category:'Antibiotics', type:'calc' },
 { id:'fosfomycin', name:'Fosfomycin', category:'Antibiotics', type:'calc' },
 { id:'teicoplanin', name:'Teicoplanin', category:'Antibiotics', type:'calc' },
 { id:'caspofungin', name:'Caspofungin', category:'Antibiotics', type:'calc' },
 { id:'voriconazole', name:'Voriconazole', category:'Antibiotics', type:'calc' },
 { id:'oseltamivir', name:'Oseltamivir', category:'Antibiotics', type:'calc' },
 { id:'entecavir', name:'Entecavir', category:'Antibiotics', type:'calc' },
 { id:'ciprofloxacin', name:'Ciprofloxacin', category:'Antibiotics', type:'calc' },
 { id:'levofloxacin', name:'Levofloxacin', category:'Antibiotics', type:'calc' },
 { id:'delafloxacin', name:'Delafloxacin', category:'Antibiotics', type:'calc' },
 { id:'sitafloxacin', name:'Sitafloxacin', category:'Antibiotics', type:'calc' },
 { id:'cefazolin', name:'Cefazolin', category:'Antibiotics', type:'calc' },
 { id:'cefuroxime', name:'Cefuroxime', category:'Antibiotics', type:'calc' },
 { id:'ertapenem', name:'Ertapenem', category:'Antibiotics', type:'calc' },
 { id:'doripenem', name:'Doripenem', category:'Antibiotics', type:'calc' },
 { id:'ampSulbactam', name:'Ampicillin-sulbactam', category:'Antibiotics', type:'calc' },
 { id:'amoxClav', name:'Amoxicillin ± clavulanate', category:'Antibiotics', type:'calc' },
 { id:'daptomycin', name:'Daptomycin', category:'Antibiotics', type:'calc' },
 { id:'polymyxinB', name:'Polymyxin B', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment — dosing is weight-based only, including on HD/CRRT (largely non-renally cleared, unlike colistin). Loading dose 2.5–3 mg/kg IV (actual body weight); maintenance 1.5–2.5 mg/kg/day IV divided q12h. Nephrotoxicity risk rises with renal impairment — monitor renal function closely regardless of dose.' },
 { id:'minocycline', name:'Minocycline', category:'Antibiotics', type:'note',
   note:'No renal dose adjustment needed, including on HD/CRRT — unlike most other tetracyclines, minocycline is eliminated predominantly via the hepatobiliary route. Standard dose: 100 mg IV/PO q12h (200 mg loading dose optional). No formal hepatic dose-reduction table exists, but use with caution in hepatic impairment (hepatotoxicity reported) — monitor LFTs, avoid other hepatotoxic agents, and consider an alternative in severe/decompensated liver disease.' },
 { id:'enoxaparin', name:'Enoxaparin (LMWH)', category:'Anticoagulants', type:'calc' },
 { id:'fondaparinux', name:'Fondaparinux', category:'Anticoagulants', type:'calc' },
 { id:'ufh', name:'Unfractionated Heparin (UFH)', category:'Anticoagulants', type:'note',
   note:'No renal dose adjustment — preferred anticoagulant in significant renal impairment/dialysis; titrate by aPTT or anti-Xa.' },
 { id:'dabigatran', name:'Dabigatran', category:'Anticoagulants', type:'note',
   note:'CrCl 30-50: reduce dose per label. CrCl <30: avoid/contraindicated — ~80% renal clearance, high accumulation risk with no rapid reversal in many settings.' },
 { id:'gabapentin', name:'Gabapentin', category:'Analgesics / Sedatives', type:'calc' },
 { id:'pregabalin', name:'Pregabalin', category:'Analgesics / Sedatives', type:'calc' },
 { id:'morphine', name:'Morphine', category:'Analgesics / Sedatives', type:'note',
   note:'Active metabolite (morphine-6-glucuronide) accumulates in renal impairment, causing prolonged sedation and respiratory depression. Reduce dose and extend interval, or avoid in CrCl <30; prefer fentanyl.' },
 { id:'meperidine', name:'Meperidine (Pethidine)', category:'Analgesics / Sedatives', type:'note',
   note:'Toxic metabolite normeperidine accumulates and can cause seizures — generally avoid in renal impairment regardless of CrCl.' },
 { id:'fentanyl', name:'Fentanyl', category:'Analgesics / Sedatives', type:'note',
   note:'No fixed dose reduction required — hepatically metabolized to inactive metabolites. Still titrate to effect and use caution with prolonged infusions.' },
 { id:'sotalol', name:'Sotalol', category:'Cardiac', type:'calc' },
 { id:'digoxin', name:'Digoxin', category:'Cardiac', type:'note',
   note:'Loading dose is unchanged; maintenance dose is individualized from CrCl via a continuous formula and drug levels (narrow therapeutic index) rather than a fixed bracket — check level before redosing.' },
 { id:'allopurinol', name:'Allopurinol', category:'Other', type:'calc' },
 { id:'famotidine', name:'Famotidine', category:'Other', type:'calc' },
 { id:'metformin', name:'Metformin', category:'Other', type:'calc' },
 { id:'insulin', name:'Insulin', category:'Other', type:'note',
   note:'No fixed dosing table — renal clearance of insulin falls as CrCl declines, increasing hypoglycemia risk. Reduce empirically and monitor glucose closely, especially at CrCl <20.' },
 { id:'baclofen', name:'Baclofen', category:'Other', type:'note',
   note:'Predominantly renally eliminated with high toxicity risk (confusion, seizures, coma) in renal impairment — reduce dose substantially and use cautiously; avoid in severe impairment/ESRD if possible.' },
 { id:'paracetamolOther', name:'Paracetamol (Acetaminophen)', category:'Other', type:'note',
   note:'Reduce dose/frequency in hepatic impairment; avoid or use with caution in severe/active liver disease.' },
 { id:'voriconazoleOther', name:'Voriconazole', category:'Other', type:'note',
   note:'Halve maintenance dose in Child-Pugh A/B; avoid or use with extreme caution in Child-Pugh C.' },
 { id:'pirfenidone', name:'Pirfenidone (Pulfibro)', category:'Other', type:'note',
   note:'Dose reduction required in mild-moderate hepatic impairment; avoid in severe impairment.' }
];

var RDAC_NO_ADJ_IDS = ['ceftriaxone','azithromycin','moxifloxacin','doxycycline','rifampin','polymyxinB','minocycline','clindamycin','linezolid','tigecycline','caspofungin'];
var rdacMainDropdownList = rdacDrugList.filter(function(d){ return d.category === 'Antibiotics' && RDAC_NO_ADJ_IDS.indexOf(d.id) === -1; })
 .sort(function(a,b){ return a.name.localeCompare(b.name); });

var rdacShortInfo = {
 enoxaparin:   { tag:'renal',   reason:'dose/interval adjusted by CrCl' },
 fondaparinux: { tag:'avoid',   reason:'avoid if CrCl <30' },
 ufh:          { tag:'none',    reason:'no adjustment — preferred in ESRD' },
 dabigatran:   { tag:'avoid',   reason:'reduce CrCl 30-50; avoid <30' },
 gabapentin:   { tag:'renal',   reason:'dose/interval adjusted by CrCl' },
 pregabalin:   { tag:'renal',   reason:'dose adjusted by CrCl' },
 morphine:     { tag:'renal',   reason:'active metabolite accumulates' },
 meperidine:   { tag:'avoid',   reason:'avoid — toxic metabolite (seizures)' },
 fentanyl:     { tag:'hepatic', reason:'hepatic metabolism, no fixed renal cut' },
 sotalol:      { tag:'renal',   reason:'interval extended; avoid if CrCl <10' },
 digoxin:      { tag:'renal',   reason:'level-guided maintenance dose' },
 allopurinol:  { tag:'renal',   reason:'dose reduced by CrCl' },
 famotidine:   { tag:'renal',   reason:'dose/interval adjusted by CrCl' },
 metformin:    { tag:'avoid',   reason:'contraindicated if CrCl <30' },
 insulin:      { tag:'renal',   reason:'clearance falls — hypoglycemia risk' },
 baclofen:     { tag:'renal',   reason:'high toxicity — reduce substantially' },
 paracetamolOther: { tag:'hepatic', reason:'reduce dose/frequency in hepatic impairment' },
 voriconazoleOther: { tag:'hepatic', reason:'halve dose Child-Pugh A/B; caution in C' },
 pirfenidone:  { tag:'hepatic', reason:'dose reduction in mild-moderate impairment' }
};

var rdacCalcFunctions = {
 vancomycin: function(crcl, wt, hd, crrt) {
  var loadTxt = 'Loading 25–30 mg/kg (max 3g) IV unchanged, then:';
  if (crrt) return { dose:Math.round(15*wt)+'–'+Math.round(20*wt)+' mg IV (15–20 mg/kg)', interval:'q24h, guided by levels', extra:loadTxt+' CRRT clearance approximates CrCl 10-50 — confirm re-dosing with a level rather than the clock. AUC24/MIC 400–600 remains the preferred target.' };
  if (hd) return { dose:Math.round(15*wt)+'–'+Math.round(25*wt)+' mg IV (15–25 mg/kg)', interval:'After each HD session (or per level)', extra:loadTxt+' No fixed post-HD dose in the source table — dose from a pre-HD level, then re-dose after dialysis. AUC24/MIC 400–600 remains the preferred target.' };
  if (crcl > 50) return { dose:Math.round(15*wt)+'–'+Math.round(30*wt)+' mg IV (15–30 mg/kg)', interval:'q12h', extra:loadTxt+' AUC24/MIC 400–600 preferred; trough-only 15–20 mcg/mL where AUC monitoring is unavailable.' };
  if (crcl >= 10) return { dose:Math.round(10*wt)+'–'+Math.round(15*wt)+' mg IV (10–15 mg/kg)', interval:'q24–96h', extra:loadTxt+' The wide interval reflects marked accumulation — dose by trough/AUC level, not by a fixed clock. Do not dose purely from this bracket — involve pharmacy.' };
  return { dose:Math.round(7.5*wt)+'–'+Math.round(10*wt)+' mg IV (7.5–10 mg/kg)', interval:'q48–72h', extra:loadTxt+' CrCl <10, non-HD — dose strictly by level; involve pharmacy.' };
 },
 colistin: function(crcl, wt, hd, crrt) {
  var loadTxt = 'Loading 300 mg CBA (~9 million units) IV once, then:';
  if (crrt) return { dose:'250–350 mg CBA/day', interval:'divided q12h', extra:loadTxt+' Approximates the GFR 50-90 tier at usual effluent rates — confirm with pharmacy/CBA protocol.' };
  if (hd) return { dose:'130 mg CBA/day (non-dialysis day) • 175 mg after dialysis (dialysis day)', interval:'divided q12h', extra:loadTxt+' Give the higher post-dialysis dose only on HD days.' };
  if (crcl > 50) return { dose:'300 mg CBA/day (~2.4–5 mg/kg/day)', interval:'divided q12h', extra:loadTxt+' Full maintenance dose — matches the GFR 50-90 tier.' };
  if (crcl >= 30) return { dose:'183–250 mg CBA/day (~2.5 mg/kg/day)', interval:'divided q12h', extra:loadTxt+' GFR 30-50 tier — confirm against a CBA/Garonzik protocol if available.' };
  if (crcl >= 10) return { dose:'150–183 mg CBA/day (~1.5 mg/kg/day)', interval:'divided q12h', extra:loadTxt+' GFR 10-30 tier — confirm against a CBA/Garonzik protocol if available.' };
  return { dose:'Not covered by fixed bracket', interval:'', extra:loadTxt+' CrCl <10, non-HD — dose from a Garonzik-formula/target-concentration CBA protocol; requires pharmacy/ICU involvement.' };
 },
 gentamicin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:Math.round(6*wt)+' mg (~5-7 mg/kg) IV', interval:'q24-48h, guided by levels', extra:'CRRT clearance approximates CrCl 20-50; check a random level ~24h after the dose to guide re-dosing.' };
  var d = Math.round(5 * wt);
  if (hd) return { dose:d+' mg (5 mg/kg) IV', interval:'Dose after each HD session', extra:'Use post-HD levels to guide re-dosing; avoid formulaic scheduling on HD days.' };
  if (crcl >= 60) return { dose:d+' mg (5 mg/kg) IV', interval:'q24h', extra:'Extended-interval dosing. Obtain a trough before the next dose if continued beyond 48-72h.' };
  if (crcl >= 40) return { dose:d+' mg (5 mg/kg) IV', interval:'q36h' };
  if (crcl >= 20) return { dose:d+' mg (5 mg/kg) IV', interval:'q48h' };
  return { dose:d+' mg (5 mg/kg) IV', interval:'Avoid formulaic dosing', extra:'CrCl <20: dose only per levels; involve pharmacy/ID.' };
 },
 amikacin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:Math.round(17.5*wt)+' mg (~15-20 mg/kg) IV', interval:'q24-48h, guided by levels', extra:'CRRT clearance approximates CrCl 20-50; use levels to guide re-dosing.' };
  var d = Math.round(15 * wt);
  if (hd) return { dose:d+' mg (15 mg/kg) IV', interval:'Dose after each HD session', extra:'Use post-HD levels to guide re-dosing.' };
  if (crcl >= 60) return { dose:d+' mg (15 mg/kg) IV', interval:'q24h' };
  if (crcl >= 40) return { dose:d+' mg (15 mg/kg) IV', interval:'q36h' };
  if (crcl >= 20) return { dose:d+' mg (15 mg/kg) IV', interval:'q48h' };
  return { dose:d+' mg (15 mg/kg) IV', interval:'Avoid formulaic dosing', extra:'CrCl <20: dose only per levels.' };
 },
 pipTazo: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'3.375–4.5 g IV', interval:'q8h (extended 4h infusion)', extra:'Standard CRRT dose at usual effluent rates (20-25 mL/kg/h); some high-intensity protocols use 2.25g q6h.' };
  if (hd) return { dose:'2.25 g IV', interval:'q12h', extra:'Give a supplemental 0.75g dose after each HD session on dialysis days.' };
  if (crcl > 40) return { dose:'3.375–4.5 g IV', interval:'q6h', extra:'Standard dosing; extended (4h) infusion preferred in sepsis.' };
  if (crcl >= 20) return { dose:'2.25 g IV', interval:'q6h' };
  return { dose:'2.25 g IV', interval:'q8h', extra:'CrCl <20' };
 },
 meropenem: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1 g IV', interval:'q8h', extra:'Increase to 1-2g q6-8h for CNS infection, high-MIC pathogens, or high-intensity CRRT.' };
  if (hd) return { dose:'500 mg IV', interval:'q24h', extra:'Give dose after HD session on dialysis days.' };
  if (crcl > 50) return { dose:'1 g IV', interval:'q8h', extra:'Up to 2g q8h for CNS infection or higher-MIC pathogens.' };
  if (crcl >= 25) return { dose:'1 g IV', interval:'q12h' };
  if (crcl >= 10) return { dose:'500 mg IV', interval:'q12h' };
  return { dose:'500 mg IV', interval:'q24h', extra:'CrCl <10' };
 },
 cefepime: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'2 g IV', interval:'q12h', extra:'Some protocols use 1-2g q8h at higher effluent rates — involve pharmacy for institution-specific CRRT dosing.' };
  if (hd) return { dose:'1 g IV', interval:'q24h', extra:'Dose after HD session.' };
  if (crcl > 60) return { dose:'2 g IV', interval:'q8h' };
  if (crcl >= 30) return { dose:'2 g IV', interval:'q12h' };
  if (crcl >= 11) return { dose:'2 g IV', interval:'q24h' };
  return { dose:'1 g IV', interval:'q24h', extra:'CrCl <11' };
 },
 ceftazidime: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'2 g IV', interval:'q12h', extra:'Increase to q8h for higher-intensity CRRT or CNS infection.' };
  if (hd) return { dose:'1 g IV', interval:'After each HD session', extra:'Give as loading dose then re-dose post-dialysis.' };
  if (crcl > 50) return { dose:'2 g IV', interval:'q8h' };
  if (crcl >= 31) return { dose:'2 g IV', interval:'q12h' };
  if (crcl >= 16) return { dose:'2 g IV', interval:'q24h' };
  if (crcl >= 6) return { dose:'1 g IV', interval:'q24h' };
  return { dose:'1 g IV', interval:'q48h', extra:'CrCl <6' };
 },
 fluconazole: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'400–800 mg IV', interval:'q24h', extra:'CRRT clears fluconazole efficiently — dose approximates the CrCl >50 tier; no major reduction needed.' };
  if (hd) return { dose:'Standard dose (e.g. 400 mg)', interval:'After each HD session', extra:'Give 100% of dose post-dialysis.' };
  if (crcl > 50) return { dose:'100% of standard dose', interval:'q24h' };
  return { dose:'50% of standard dose', interval:'q24h', extra:'CrCl ≤50, not on HD' };
 },
 acyclovir: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'~'+Math.round(7.5*wt)+' mg (5-10 mg/kg) IV', interval:'q12-24h', extra:'Dose per effluent rate; extend to q24h at lower-intensity CRRT.' };
  var d = Math.round(7.5 * wt);
  if (hd) return { dose:'~'+d+' mg (5-10 mg/kg)', interval:'q24h', extra:'Give dose after HD session.' };
  if (crcl > 50) return { dose:'~'+d+' mg (5-10 mg/kg) IV', interval:'q8h' };
  if (crcl >= 25) return { dose:'~'+d+' mg (5-10 mg/kg) IV', interval:'q12h' };
  if (crcl >= 10) return { dose:'~'+d+' mg (5-10 mg/kg) IV', interval:'q24h' };
  return { dose:'~'+Math.round(d/2)+' mg (50% dose) IV', interval:'q24h', extra:'CrCl <10' };
 },
 ganciclovir: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:Math.round(2.5*wt)+' mg (2.5 mg/kg)', interval:'q24h', extra:'Induction dosing; approximates the CrCl 25-50 tier.' };
  if (hd) return { dose:Math.round(1.25*wt)+' mg (1.25 mg/kg)', interval:'3x/week, after HD', extra:'Induction dosing.' };
  if (crcl >= 70) return { dose:Math.round(5*wt)+' mg (5 mg/kg)', interval:'q12h' };
  if (crcl >= 50) return { dose:Math.round(2.5*wt)+' mg (2.5 mg/kg)', interval:'q12h' };
  if (crcl >= 25) return { dose:Math.round(2.5*wt)+' mg (2.5 mg/kg)', interval:'q24h' };
  if (crcl >= 10) return { dose:Math.round(1.25*wt)+' mg (1.25 mg/kg)', interval:'q24h' };
  return { dose:Math.round(1.25*wt)+' mg (1.25 mg/kg)', interval:'3x/week', extra:'CrCl <10, non-HD' };
 },
 aztreonam: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'2 g IV load, then 1 g', interval:'q8-12h', extra:'Use the q8h end of the range for severe infection/meningitis.' };
  if (hd) return { dose:'1 g IV (severe/meningitis 1 g)', interval:'q24h', extra:'Severe/meningitis: 1g q12h. Dose after HD session.' };
  if (crcl > 50) return { dose:'1–2 g IV', interval:'q8h', extra:'Severe/meningitis: 2g q6-8h.' };
  if (crcl >= 10) return { dose:'1 g IV', interval:'q8h', extra:'Severe: 1g q6-8h.' };
  return { dose:'500 mg IV', interval:'q8h', extra:'CrCl <10; severe: 1g q12h.' };
 },
 ceftazAvibactam: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1.25 g IV', interval:'q8h', extra:'Increase to 2.5g q8h if MIC >4 or deep-seated infection.' };
  if (hd) return { dose:'0.94 g IV', interval:'q24-48h', extra:'Dose after HD.' };
  if (crcl > 50) return { dose:'2.5 g IV', interval:'q8h' };
  if (crcl >= 31) return { dose:'1.25 g IV', interval:'q8h' };
  if (crcl >= 16) return { dose:'0.94 g IV', interval:'q12h' };
  if (crcl >= 6) return { dose:'0.94 g IV', interval:'q24h' };
  return { dose:'0.94 g IV', interval:'q48h', extra:'CrCl <6' };
 },
 cefoperSulbactam: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'2–4 g (1:1) IV', interval:'q12h', extra:'Usual (non-renally-adjusted) dose; max sulbactam 4g/day.' };
  if (hd) return { dose:'2–4 g (1:1) IV', interval:'q12h', extra:'Dose after HD. Max sulbactam 4g/day.' };
  if (crcl >= 15) return { dose:'2–4 g (1:1) IV', interval:'q12h', extra:'No change — cefoperazone is hepatobiliary; max sulbactam 4g/day.' };
  return { dose:'2–4 g (1:1) IV', interval:'q24h', extra:'CrCl <15 — sulbactam accumulates, extend interval.' };
 },
 imipenemCilastatin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1 g IV load, then 500 mg', interval:'q6h', extra:'Seizure risk rises with accumulation — do not exceed this on CRRT.' };
  if (hd) return { dose:'250–500 mg IV', interval:'q12h', extra:'Dose after HD.' };
  if (crcl > 60) return { dose:'1 g IV', interval:'q8h' };
  if (crcl >= 30) return { dose:'500 mg IV', interval:'q8h' };
  if (crcl >= 15) return { dose:'500 mg IV', interval:'q12h' };
  return { dose:'Not recommended unless dialysis started <48h', interval:'', extra:'CrCl <15, non-HD.' };
 },
 metronidazole: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'500 mg IV/PO', interval:'q8h', extra:'No change on CRRT.' };
  if (hd) return { dose:'500 mg IV/PO', interval:'q8h', extra:'No change on HD.' };
  if (crcl >= 10) return { dose:'500 mg IV/PO', interval:'q8h', extra:'IAI: q8-12h. No formal reduction needed.' };
  return { dose:'500 mg IV/PO', interval:'q8h', extra:'CrCl <10 — caution: accumulation risk if used >1-2 weeks; consider reduction with prolonged courses.' };
 },
 clindamycin: function(crcl, wt, hd, crrt) {
  return { dose:'600–900 mg IV', interval:'q8h', extra:'No renal adjustment needed at any CrCl, including HD/CRRT — hepatically metabolized.' };
 },
 tmpSmx: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:Math.round(7.5*wt)+' mg TMP/day (5-10 mg/kg/day)', interval:'÷ q12h', extra:'Higher end (10mg/kg/day) for PJP/Stenotrophomonas; involve pharmacy.' };
  if (hd) return { dose:'25–50% of usual dose', interval:'Dose after HD', extra:'Dose after HD.' };
  if (crcl > 30) return { dose:'Per indication', interval:'e.g. 15 mg/kg/day TMP for PJP', extra:'No reduction needed.' };
  if (crcl >= 15) return { dose:'50% of usual dose', interval:'Per indication', extra:'CrCl 15-30.' };
  return { dose:'Not recommended (5–7.5 mg/kg TMP q24h if PJP essential)', interval:'', extra:'CrCl <15.' };
 },
 linezolid: function(crcl, wt, hd, crrt) {
  return { dose:'600 mg IV/PO', interval:'q12h', extra:'No renal adjustment needed at any CrCl, including HD/CRRT.' };
 },
 tigecycline: function(crcl, wt, hd, crrt) {
  return { dose:'100 mg IV load, then 50 mg', interval:'q12h', extra:'No renal adjustment at any CrCl, including HD/CRRT. Child-Pugh C: 25mg q12h after load (hepatic, not renal, adjustment).' };
 },
 clarithromycin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'250 mg q12h or 500 mg q24h', interval:'', extra:'Same ~50% dose reduction applies on CRRT as on HD.' };
  if (hd) return { dose:'As CrCl <30 tier', interval:'Dose after HD', extra:'Dose after HD.' };
  if (crcl >= 30) return { dose:'500 mg PO/IV', interval:'q12h', extra:'XR: 1000mg q24h. No change.' };
  return { dose:'250 mg q12h or 500 mg q24h', interval:'', extra:'CrCl <30 — reduce dose ~50%.' };
 },
 fosfomycin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'IV: usual dose (per indication)', interval:'', extra:'CRRT clears fosfomycin reasonably well; monitor levels if available, involve pharmacy.' };
  if (hd) return { dose:'IV: dose post-HD only', interval:'', extra:'' };
  if (crcl > 50) return { dose:'IV: 4–8 g q8h (severe/MDR)', interval:'PO: 3 g single dose for cystitis' };
  if (crcl >= 10) return { dose:'IV: extend interval / reduce dose', interval:'', extra:'Involve pharmacy for exact adjustment.' };
  return { dose:'IV: further reduction — involve pharmacy', interval:'', extra:'CrCl <10.' };
 },
 teicoplanin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'Loading dose unchanged (first 3 doses); then 1/3 maintenance', interval:'', extra:'Approximates the CrCl <40 tier; level-guided if available.' };
  var load = Math.round(9 * wt);
  if (hd) return { dose:'As CrCl <40 tier', interval:'Dose after HD', extra:'Dose after HD.' };
  if (crcl > 60) return { dose:'Load ~'+load+' mg (6-12 mg/kg) q12h ×3, then 400 mg', interval:'q24h maintenance' };
  if (crcl >= 40) return { dose:'Halve maintenance dose after day 4', interval:'', extra:'Loading dose unchanged (first 3 doses).' };
  return { dose:'Reduce to 1/3 maintenance dose after day 4', interval:'', extra:'CrCl <40. Loading dose unchanged.' };
 },
 caspofungin: function(crcl, wt, hd, crrt) {
  return { dose:'70 mg load, then 50 mg', interval:'q24h', extra:'No renal adjustment at any CrCl, including HD/CRRT. Endocarditis: 150mg q24h. Child-Pugh B: reduce to 35mg after load (hepatic); Child-Pugh C: not recommended.' };
 },
 voriconazole: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'Prefer PO if available', interval:'', extra:'IV vehicle (cyclodextrin) accumulates on CRRT as on HD; if IV essential, use the same loading/maintenance doses with close monitoring.' };
  var load = Math.round(6 * wt), maint = Math.round(4 * wt);
  if (hd || crcl < 50) return { dose:'Prefer PO if available', interval:'', extra:'IV vehicle (cyclodextrin) accumulates below CrCl 50, incl. HD/CRRT. If IV essential: same loading/maintenance doses with close monitoring.' };
  return { dose:'~'+load+' mg IV q12h ×2, then ~'+maint+' mg', interval:'q12h maintenance', extra:'No renal dose reduction of drug itself; caution is about the IV vehicle only.' };
 },
 oseltamivir: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'75 mg', interval:'q12h', extra:'Normal dose — CRRT provides adequate clearance.' };
  if (hd) return { dose:'30 mg ×1, then 30 mg post-HD only', interval:'', extra:'' };
  if (crcl > 60) return { dose:'Treatment 75 mg', interval:'q12h', extra:'Prophylaxis: 75mg q24h.' };
  if (crcl >= 30) return { dose:'Tx: 75 mg ×1, then 30 mg', interval:'q12h' };
  if (crcl >= 10) return { dose:'Tx: 30 mg', interval:'q24h' };
  return { dose:'Tx: 30 mg', interval:'q48h', extra:'CrCl <10.' };
 },
 entecavir: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'Use CrCl <10 / HD tier dosing', interval:'', extra:'Approximate using the CrCl <10 tier; limited CRRT-specific data.' };
  if (hd) return { dose:'0.05 mg q24h or 0.5 mg', interval:'q7days', extra:'Dose after HD.' };
  if (crcl > 50) return { dose:'0.5 mg PO', interval:'q24h', extra:'1mg if lamivudine-experienced/decompensated.' };
  if (crcl >= 30) return { dose:'0.25 mg q24h or 0.5 mg', interval:'q48h' };
  if (crcl >= 10) return { dose:'0.15 mg q24h or 0.5 mg', interval:'q72h' };
  return { dose:'Use CrCl <10 / HD tier dosing', interval:'', extra:'CrCl <10, non-HD — approximate using HD tier.' };
 },
 ciprofloxacin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'400 mg IV', interval:'q12h', extra:'CRRT clearance approximates the CrCl 30-50 tier; verify locally.' };
  if (hd) return { dose:'400 mg IV', interval:'q24h', extra:'Dose after HD. Standard reference — verify locally.' };
  if (crcl > 50) return { dose:'400 mg IV', interval:'q8-12h', extra:'PO: 500-750mg q12h.' };
  if (crcl >= 30) return { dose:'400 mg IV', interval:'q12h', extra:'PO: 500mg q12h.' };
  return { dose:'400 mg IV', interval:'q24h', extra:'CrCl 5-29. PO: 500mg q18h.' };
 },
 levofloxacin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'750 mg ×1, then 500 mg', interval:'q24h', extra:'Some protocols use 500mg q24h throughout; verify locally.' };
  if (hd) return { dose:'500 mg ×1, then 250 mg', interval:'q48h', extra:'Dose after HD. Standard reference — verify locally.' };
  if (crcl >= 50) return { dose:'500–750 mg', interval:'q24h', extra:'Per indication.' };
  if (crcl >= 20) return { dose:'750mg×1 then 750mg q48h, or 500mg×1 then 250mg q24h', interval:'' };
  return { dose:'500 mg ×1, then 250 mg', interval:'q48h', extra:'CrCl 10-19.' };
 },
 delafloxacin: function(crcl, wt, hd, crrt) {
  if (hd || crrt) return { dose:'Avoid IV — insufficient RRT data', interval:'', extra:'IV vehicle (SBECD) accumulates on HD/CRRT; switch to oral 450mg q12h (unadjusted) if the patient can take enteral route.' };
  if (crcl >= 30) return { dose:'300 mg IV q12h or 450 mg PO q12h', interval:'', extra:'No adjustment needed (mild-moderate impairment).' };
  if (crcl >= 15) return { dose:'200 mg IV q12h; oral 450 mg PO q12h unchanged', interval:'', extra:'CrCl 15-29 — monitor serum creatinine closely on IV; switch to oral if it rises.' };
  return { dose:'Not recommended (eGFR <15)', interval:'', extra:'Insufficient data for dosing recommendations at this level.' };
 },
 sitafloxacin: function(crcl, wt, hd, crrt) {
  if (hd || crrt) return { dose:'Use with caution — limited RRT data', interval:'', extra:'Approximate using the CrCl <30 tier (50mg q48h); not FDA-approved — involve pharmacy/ID and verify local protocol.' };
  if (crcl > 50) return { dose:'50 mg PO', interval:'q12h', extra:'Up to 100mg q12h for MDR/severe infection per local protocol.' };
  if (crcl >= 30) return { dose:'50 mg PO', interval:'q24h', extra:'CrCl 30-50.' };
  return { dose:'50 mg PO', interval:'q48h', extra:'CrCl <30. Not FDA-approved (Japan/Asia-Pacific) — verify local availability.' };
 },
 cefazolin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1–2 g IV', interval:'q12h', extra:'Approximates the CrCl 35-55 tier at usual effluent rates.' };
  if (hd) return { dose:'0.5–1 g IV', interval:'Dose after HD', extra:'Standard reference — verify locally.' };
  if (crcl > 55) return { dose:'1–2 g IV', interval:'q8h' };
  if (crcl >= 35) return { dose:'1–2 g IV', interval:'q12h' };
  if (crcl >= 11) return { dose:'1–2 g IV', interval:'q24h' };
  return { dose:'1–2 g IV', interval:'q48h', extra:'CrCl ≤10.' };
 },
 cefuroxime: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'750 mg–1.5 g IV', interval:'q8-12h', extra:'Approximates the CrCl 10-30 tier.' };
  if (hd) return { dose:'750 mg IV', interval:'Dose after HD', extra:'Standard reference — verify locally.' };
  if (crcl > 30) return { dose:'750 mg–1.5 g IV', interval:'q8h' };
  if (crcl >= 10) return { dose:'750 mg–1.5 g IV', interval:'q12h' };
  return { dose:'750 mg IV', interval:'q24h', extra:'CrCl <10.' };
 },
 ertapenem: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1 g IV', interval:'q24h', extra:'Highly protein-bound and poorly cleared by CRRT — standard dose is typically retained; verify locally.' };
  if (hd) return { dose:'500 mg IV', interval:'q24h', extra:'Give within 6h before HD, or add 150mg supplemental dose after HD if given >6h prior.' };
  if (crcl > 30) return { dose:'1 g IV', interval:'q24h', extra:'No change.' };
  return { dose:'500 mg IV', interval:'q24h', extra:'CrCl ≤30.' };
 },
 doripenem: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'250 mg IV', interval:'q8h', extra:'No formal CRRT data — approximates the moderate-impairment tier; verify locally.' };
  if (hd) return { dose:'Insufficient data for HD dosing', interval:'', extra:'Manufacturer states dosing recommendations on hemodialysis are not established — avoid or involve pharmacy/ID.' };
  if (crcl > 50) return { dose:'500 mg IV', interval:'q8h' };
  if (crcl >= 30) return { dose:'250 mg IV', interval:'q8h', extra:'CrCl 30-50.' };
  return { dose:'250 mg IV', interval:'q12h', extra:'CrCl <30. Use with caution — limited severe-impairment data.' };
 },
 ampSulbactam: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'1.5–3 g IV', interval:'q8h', extra:'Approximates the CrCl 15-30 tier at usual effluent rates.' };
  if (hd) return { dose:'1.5–3 g IV', interval:'q24h', extra:'Dose after HD. Standard reference — verify locally.' };
  if (crcl > 30) return { dose:'1.5–3 g IV', interval:'q6h' };
  if (crcl >= 15) return { dose:'1.5–3 g IV', interval:'q12h' };
  return { dose:'1.5–3 g IV', interval:'q24h', extra:'CrCl 5-14.' };
 },
 amoxClav: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:'500 mg', interval:'q12h', extra:'IV ampicillin-sulbactam is generally preferred in ICU/CRRT settings.' };
  if (hd) return { dose:'500 mg', interval:'q24h', extra:'Dose after HD. Standard reference — verify locally.' };
  if (crcl > 30) return { dose:'500–875 mg', interval:'q8-12h', extra:'Per indication.' };
  if (crcl >= 10) return { dose:'500 mg', interval:'q12h' };
  return { dose:'500 mg', interval:'q24h', extra:'CrCl <10. Avoid high-dose (875mg+) formulations.' };
 },
 daptomycin: function(crcl, wt, hd, crrt) {
  if (crrt) return { dose:Math.round(6*wt)+' mg (4-6 mg/kg) IV', interval:'q24h', extra:'Continuous CRRT clearance is better preserved than with HD — many protocols use q24h rather than the HD-tier q48h; verify locally and consider q48h if effluent rate is low.' };
  var d = Math.round(6 * wt);
  if (hd) return { dose:d+' mg (4-6 mg/kg) IV', interval:'q48h', extra:'Dose after HD. Standard reference — verify locally.' };
  if (crcl >= 30) return { dose:d+' mg (4-6 mg/kg) IV', interval:'q24h' };
  return { dose:d+' mg (4-6 mg/kg) IV', interval:'q48h', extra:'CrCl <30, non-HD.' };
 },
 enoxaparin: function(crcl, wt, hd, crrt) {
  if (hd) return { dose:'Avoid enoxaparin — use UFH', interval:'', extra:'ESRD/HD: unfractionated heparin is preferred over LMWH.' };
  var d = Math.round(1 * wt);
  if (crcl >= 30) return { dose:d+' mg SC (1 mg/kg)', interval:'q12h', extra:'Treatment dose. Prophylaxis: 40 mg SC q24h.' };
  return { dose:d+' mg SC (1 mg/kg)', interval:'q24h', extra:'CrCl <30 — treatment interval extended. Prophylaxis: 30 mg SC q24h.' };
 },
 fondaparinux: function(crcl, wt, hd, crrt) {
  if (hd || crcl < 30) return { dose:'Contraindicated', interval:'', extra:'Avoid — accumulation risk, no rapid reversal agent.' };
  var d = wt < 50 ? '5 mg SC' : (wt <= 100 ? '7.5 mg SC' : '10 mg SC');
  if (crcl < 50) return { dose:d, interval:'q24h', extra:'CrCl 30-50: use with caution, consider dose reduction or an alternative agent.' };
  return { dose:d, interval:'q24h', extra:'CrCl ≥50: standard weight-based dosing.' };
 },
 gabapentin: function(crcl, wt, hd, crrt) {
  if (hd) return { dose:'100-300 mg', interval:'Once daily, dose after HD', extra:'Give a supplemental dose after each dialysis session.' };
  if (crcl > 60) return { dose:'300-1200 mg', interval:'TID', extra:'No adjustment needed.' };
  if (crcl >= 30) return { dose:'200-700 mg', interval:'BID' };
  if (crcl >= 15) return { dose:'200-700 mg', interval:'Once daily' };
  return { dose:'100-300 mg', interval:'Once daily', extra:'CrCl <15' };
 },
 pregabalin: function(crcl, wt, hd, crrt) {
  if (hd) return { dose:'25-75 mg', interval:'Once daily, dose after HD', extra:'Give a supplemental dose after each dialysis session.' };
  if (crcl >= 60) return { dose:'100% of standard dose', interval:'Per standard regimen' };
  if (crcl >= 30) return { dose:'~50% of standard dose', interval:'Per standard regimen' };
  if (crcl >= 15) return { dose:'~25-50% of standard dose', interval:'Per standard regimen' };
  return { dose:'~25% of standard dose', interval:'Per standard regimen', extra:'CrCl <15' };
 },
 sotalol: function(crcl, wt, hd, crrt) {
  if (hd || crcl < 10) return { dose:'Avoid / contraindicated', interval:'', extra:'Significant renal elimination — high accumulation and QT risk.' };
  if (crcl > 60) return { dose:'Standard dose', interval:'q12h' };
  if (crcl >= 30) return { dose:'Standard dose', interval:'q24h' };
  return { dose:'Standard dose', interval:'q48h', extra:'CrCl 10-30 — monitor QTc closely.' };
 },
 allopurinol: function(crcl, wt, hd, crrt) {
  if (hd) return { dose:'100 mg', interval:'After each HD session' };
  if (crcl > 50) return { dose:'Up to 300 mg', interval:'Once daily' };
  if (crcl >= 10) return { dose:'100-200 mg', interval:'Once daily' };
  return { dose:'100 mg', interval:'Every 2-3 days', extra:'CrCl <10' };
 },
 famotidine: function(crcl, wt, hd, crrt) {
  if (hd) return { dose:'20 mg', interval:'Once daily, after HD' };
  if (crcl > 50) return { dose:'20 mg', interval:'q12h', extra:'Standard dose.' };
  if (crcl >= 10) return { dose:'20 mg', interval:'q24h', extra:'~50% dose reduction.' };
  return { dose:'10 mg', interval:'q24h', extra:'CrCl <10' };
 },
 metformin: function(crcl, wt, hd, crrt) {
  if (hd || crcl < 30) return { dose:'Contraindicated — discontinue', interval:'', extra:'Lactic acidosis risk.' };
  if (crcl >= 45) return { dose:'Continue standard dose', interval:'', extra:'No adjustment needed; reassess if renal function falls further.' };
  return { dose:'Reduce dose by ~50%', interval:'', extra:'CrCl 30-44: use with caution, increase monitoring, avoid initiating new therapy.' };
 }
};

function rdacGetStage(crcl) {
 if (crcl >= 90) return { label:'Normal', color:'#10b981' };
 if (crcl >= 60) return { label:'Mild impairment', color:'#10b981' };
 if (crcl >= 30) return { label:'Moderate impairment', color:'#f59e0b' };
 if (crcl >= 15) return { label:'Severe impairment', color:'#ef4444' };
 return { label:'Kidney failure / ESRD', color:'#ef4444' };
}

function rdacGetCrClInputs() {
 var age = parseFloat(document.getElementById('crcl-age-n').value) || 50;
 var wt  = parseFloat(document.getElementById('crcl-wt-n').value)  || 60;
 var scr = parseFloat(document.getElementById('crcl-cr-n').value)  || 1.0;
 var sex = (document.querySelector('input[name="crcl-sex"]:checked') || {}).value || 'male';
 var factor = sex === 'female' ? 0.85 : 1.0;
 var crcl = +((((140 - age) * wt * factor) / (72 * scr))).toFixed(1);
 return { crcl: crcl, wt: wt };
}

function calcRdac() {
 var resultVal = document.getElementById('rdac-result-val');
 if (!resultVal) return;
 var inputs = rdacGetCrClInputs();
 resultVal.textContent = inputs.crcl + ' ml/min';
 var stage = rdacGetStage(inputs.crcl);
 var stageEl = document.getElementById('rdac-result-stage');
 stageEl.textContent = stage.label;
 stageEl.style.color = stage.color;
 stageEl.style.background = stage.color + '22';
 rdacRenderDose();
}

function rdacToggleRrt(which) {
 var hdBox = document.getElementById('rdac-hd');
 var crrtBox = document.getElementById('rdac-crrt');
 if (!hdBox || !crrtBox) return;
 if (which === 'hd' && hdBox.checked) crrtBox.checked = false;
 if (which === 'crrt' && crrtBox.checked) hdBox.checked = false;
 calcRdac();
}

var rdacSelectedId = '';

function rdacBuildDropdown() {
 var panel = document.getElementById('rdacDropPanel');
 if (!panel || panel.dataset.built) return;
 panel.dataset.built = '1';
 var html = '<div class="rdac-dd-searchrow"><input type="text" id="rdacSearchInput" class="rdac-dd-search" placeholder="Search antibiotic…" oninput="rdacFilterDropdown(this.value)" onfocus="rdacFitPanelToKeyboard()" onclick="event.stopPropagation()"></div>';
 html += '<div id="rdacDdOptsWrap">';
 rdacMainDropdownList.forEach(function(d) {
  html += '<div class="rdac-dd-opt" data-id="'+d.id+'" data-name="'+d.name.toLowerCase()+'" onclick="rdacSelectDrug(\''+d.id+'\')">'+d.name
        + ((d.type === 'note' || d.guided) ? ' <span class="rdac-dd-tag">guided</span>' : '') + '</div>';
 });
 html += '<div id="rdacSearchEmpty" style="display:none;padding:12px;font-size:12px;color:var(--text-faint);text-align:center">No match — full list shown below</div>';
 html += '</div>';
 panel.innerHTML = html;
}

// Keep the dropdown panel fully above the on-screen keyboard: scroll the
// search box into view first, then cap the panel's height to whatever
// visible space is actually left below it (recomputed live if the
// keyboard's own height changes, e.g. switching between number/text pads).
function rdacFitPanelToKeyboard() {
 var wrap = document.getElementById('rdacDdWrap');
 var panel = document.getElementById('rdacDropPanel');
 if (!wrap || !panel) return;
 var reposition = function() {
  wrap.scrollIntoView({ block: 'start', behavior: 'smooth' });
  requestAnimationFrame(function() {
   var vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight);
   var rect = wrap.getBoundingClientRect();
   var available = vh - rect.bottom - 12;
   panel.style.maxHeight = Math.max(140, available) + 'px';
  });
 };
 reposition();
 if (window.visualViewport && !wrap.dataset.vvBound) {
  wrap.dataset.vvBound = '1';
  window.visualViewport.addEventListener('resize', function() {
   if (wrap.classList.contains('open')) reposition();
  });
 }
}

function rdacAdjustDropdownPosition() {
  var wrap = document.getElementById('rdacDdWrap');
  var panel = document.getElementById('rdacDropPanel');
  if (!wrap || !panel || !wrap.classList.contains('open')) return;
  
  setTimeout(function() {
    var wrapRect = wrap.getBoundingClientRect();
    var panelRect = panel.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var buffer = 10;
    
    // If panel bottom extends past viewport (with buffer), flip to top
    if (panelRect.bottom > viewportHeight - buffer) {
      panel.style.top = 'auto';
      panel.style.bottom = 'calc(100% + 5px)';
    } else {
      panel.style.top = 'calc(100% + 5px)';
      panel.style.bottom = 'auto';
    }
  }, 0);
}

function rdacOpenSearch(e) {
 e.stopPropagation();
 rdacBuildDropdown();
 var wrap = document.getElementById('rdacDdWrap');
 if (!wrap.classList.contains('open')) wrap.classList.add('open');
 setTimeout(function() {
  var inp = document.getElementById('rdacSearchInput');
  if (inp) inp.focus();
  rdacFitPanelToKeyboard();
  rdacAdjustDropdownPosition();
 }, 20);
}

function rdacFilterDropdown(q) {
 q = (q || '').trim().toLowerCase();
 var panel = document.getElementById('rdacDropPanel');
 var opts = panel.querySelectorAll('.rdac-dd-opt');
 var firstMatch = null;
 opts.forEach(function(o) {
  var match = !!q && (o.dataset.name || '').indexOf(q) !== -1;
  o.classList.toggle('rdac-match', match);
  if (match && !firstMatch) firstMatch = o;
 });
 var empty = document.getElementById('rdacSearchEmpty');
 if (empty) empty.style.display = (q && !firstMatch) ? 'block' : 'none';
 if (firstMatch) {
  requestAnimationFrame(function() {
   var target = firstMatch.offsetTop - firstMatch.clientHeight;
   panel.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
  });
 }
 rdacAdjustDropdownPosition();
}

function rdacToggleDropdown(e) {
 e.stopPropagation();
 rdacBuildDropdown();
 var wrap = document.getElementById('rdacDdWrap');
 var wasOpen = wrap.classList.contains('open');
 rdacCloseDropdown();
 if (!wasOpen) {
  wrap.classList.add('open');
  rdacAdjustDropdownPosition();
 }
}
function rdacCloseDropdown() {
 var wrap = document.getElementById('rdacDdWrap');
 if (wrap) wrap.classList.remove('open');
 var inp = document.getElementById('rdacSearchInput');
 if (inp) { inp.value = ''; rdacFilterDropdown(''); }
}
document.addEventListener('click', function(e) {
 if (e.target.closest('#rdacDdWrap')) return;
 rdacCloseDropdown();
});
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') rdacCloseDropdown(); });

function rdacSelectDrug(id) {
 rdacSelectedId = id;
 var d = rdacMainDropdownList.find(function(x){ return x.id === id; });
 var label = document.getElementById('rdacDropLabel');
 label.textContent = d.name;
 label.classList.remove('rdac-placeholder-label');
 document.querySelectorAll('#rdacDropPanel .rdac-dd-opt').forEach(function(o) {
  o.classList.toggle('selected', o.dataset.id === id);
 });
 rdacCloseDropdown();
 rdacRenderDose();
}

function rdacRenderDose() {
 var out = document.getElementById('rdac-doseOutput');
 if (!out) return;
 if (!rdacSelectedId) {
  out.innerHTML = '<p class="rdac-placeholder-text">Select an antibiotic above to see the recommended dose</p>';
  return;
 }
 var drug = rdacMainDropdownList.find(function(x){ return x.id === rdacSelectedId; });
 var inputs = rdacGetCrClInputs();
 var crcl = inputs.crcl, wt = inputs.wt;
 var hd = document.getElementById('rdac-hd').checked;
 var crrtBox = document.getElementById('rdac-crrt');
 var crrt = crrtBox ? crrtBox.checked : false;

 var modeTag = crrt ? '<span style="font-size:9px;font-weight:700;color:#3b82f6;background:#3b82f622;border-radius:3px;padding:1px 6px;margin-left:5px;vertical-align:1px">CRRT</span>'
   : hd ? '<span style="font-size:9px;font-weight:700;color:#3b82f6;background:#3b82f622;border-radius:3px;padding:1px 6px;margin-left:5px;vertical-align:1px">HD</span>' : '';

 if (drug.type === 'note') {
  out.innerHTML = '<div class="rdac-dose-label">Recommended Dose'+modeTag+'</div><span class="rdac-dose-value" style="color:#f59e0b">Level / formula-guided — see note</span><div class="rdac-dose-note">'+drug.note+'</div>';
  return;
 }
 var result = rdacCalcFunctions[rdacSelectedId](crcl, wt, hd, crrt);
 out.innerHTML = '<div class="rdac-dose-label">Recommended Dose'+modeTag+'</div><span class="rdac-dose-value">'+result.dose+(result.interval ? ' • '+result.interval : '')+'</span>'
   + (result.extra ? '<div class="rdac-dose-note">'+result.extra+'</div>' : '');
}

function rdacBuildShortList() {
 var wrap = document.getElementById('rdac-shortList');
 if (!wrap || wrap.dataset.built) return;
 wrap.dataset.built = '1';
 var cats = ['Anticoagulants','Analgesics / Sedatives','Cardiac','Other'];
 var html = '';
 cats.forEach(function(cat) {
  var items = rdacDrugList.filter(function(d){ return d.category === cat; });
  if (!items.length) return;
  html += '<div class="rdac-short-cat">'+cat+'</div>';
  items.forEach(function(d) {
   var info = rdacShortInfo[d.id] || { tag:'renal', reason:'' };
   html += '<div class="rdac-short-item"><span class="rdac-short-tag rdac-tag-'+info.tag+'">'+info.tag.charAt(0).toUpperCase()+'</span><span class="rdac-short-name">'+d.name+'</span><span class="rdac-short-reason">'+info.reason+'</span></div>';
  });
 });
 wrap.innerHTML = html;
}

/* ══════════ Iron Deficiency Anaemia (IDA) ══════════ */
var idaSalts = [
 { name:'Ferrous sulfate (325 mg tab)', elementalPct:0.20, tabletMg:325 },
 { name:'Ferrous fumarate (200 mg tab)', elementalPct:0.33, tabletMg:200 },
 { name:'Ferrous gluconate (300 mg tab)', elementalPct:0.12, tabletMg:300 }
];

var idaIVProducts = [
 { name:'Ferric carboxymaltose', maxDose:function(wt){ return wt>=50 ? 750 : Math.min(15*wt,750); }, note:'Max 2 doses ≥7 days apart, ≤1500 mg per course (US label); some EU regimens allow a higher single dose.' },
 { name:'Ferric derisomaltose', maxDose:function(wt){ return wt>=50 ? 1000 : Math.min(20*wt,1000); }, note:'Often deliverable as a single infusion; repeat course ≥8 weeks later if deficit remains.' },
 { name:'Low-molecular-weight iron dextran', maxDose:function(wt, deficit){ return Math.min(20*wt, deficit); }, note:'May be given as a total-dose infusion after a test dose; alternatively in ~100 mg increments.' },
 { name:'Iron sucrose', maxDose:function(){ return 200; }, note:'Typically ≤200–300 mg per infusion, up to 3×/week.' },
 { name:'Sodium ferric gluconate', maxDose:function(){ return 125; }, note:'125 mg per infusion is standard in dialysis protocols.' }
];

// Row-tab switcher for the 2x2 IDA tile grid (Mentzer/Ganzoni, Iron Studies/Replacement Dosing).
// Each row is independent: opening one tile's content closes its row-mate, without touching the other row.
// Calculated values are never lost — hidden tiles are just display:none, never removed from the DOM.
function idaRowSwitch(row, key) {
 var tabs = document.getElementById('ida-tabs-' + row);
 var btn = tabs ? tabs.querySelector('.ida-row-tab[data-key="' + key + '"]') : null;
 var alreadyOpen = btn && btn.classList.contains('active');
 if (tabs) tabs.querySelectorAll('.ida-row-tab').forEach(function(b){
  b.classList.toggle('active', !alreadyOpen && b.getAttribute('data-key') === key);
 });
 document.querySelectorAll('.ucv-sub-card[data-ida-row="' + row + '"]').forEach(function(card){
  var body = card.querySelector(':scope > .ucv-sub-body');
  if (body) body.style.display = (!alreadyOpen && card.id === 'ucvs-' + key) ? '' : 'none';
 });
}

function idaSwitchTab(section, tab, btn) {
 var tabsRow = btn.closest('.ida-tabs');
 tabsRow.querySelectorAll('.ida-tab-btn').forEach(function(b){ b.classList.remove('active'); });
 btn.classList.add('active');
 var container = tabsRow.parentElement;
 container.querySelectorAll('.ida-tab-pane').forEach(function(p){ p.classList.remove('active'); });
 var pane = document.getElementById('ida-tab-' + section + '-' + tab);
 if (pane) pane.classList.add('active');
}

function calcMentzer() {
 var mcvEl = document.getElementById('ida-mcv');
 if (!mcvEl) return;
 var mcv = parseFloat(mcvEl.value);
 var rbc = parseFloat(document.getElementById('ida-rbc-n').value);
 var rdw = parseFloat(document.getElementById('ida-rdw-n').value);
 var valEl = document.getElementById('ida-mentzer-val');
 var badgeEl = document.getElementById('ida-mentzer-badge');
 var textEl = document.getElementById('ida-mentzer-text');
 if (!isFinite(mcv) || !isFinite(rbc) || rbc === 0) {
  valEl.textContent = '—'; badgeEl.textContent = '—'; badgeEl.style.color=''; badgeEl.style.background='var(--surface2)'; textEl.textContent=''; return;
 }
 var idx = mcv / rbc;
 valEl.textContent = idx.toFixed(1);
 var badge, color, text;
 if (idx >= 13) { badge='Favours IDA'; color='#ef4444'; text='Index ≥13 — favours iron deficiency anaemia over thalassaemia trait.'; }
 else if (idx >= 12) { badge='Grey zone'; color='#f59e0b'; text='Borderline (12–13). ' + (isFinite(rdw) && rdw>15 ? 'Elevated RDW here leans toward IDA.' : 'A normal RDW here leans toward thalassaemia trait.'); }
 else { badge='Favours thalassaemia'; color='#10b981'; text='Index <12 — favours thalassaemia trait; consider haemoglobin electrophoresis.'; }
 badgeEl.textContent = badge; badgeEl.style.color = color; badgeEl.style.background = color+'22';
 textEl.textContent = text;
}

// Manual-override tracking: once the user directly edits Target Hb or the
// IV Iron Deficit field, auto-recalculation (triggered by weight/Hb changes)
// must stop silently overwriting their chosen value. Reset only by an
// explicit action (idaPullDeficit for the deficit field) or a page reload.
var idaTargetManual = false;
var idaDeficitManual = false;

function idaUpdateTarget() {
 if (idaTargetManual) return;
 var wtEl = document.getElementById('ida-wt-n');
 if (!wtEl) return;
 var w = parseFloat(wtEl.value);
 if (isFinite(w)) {
  var t = w < 35 ? 13 : 15;
  document.getElementById('ida-target').value = t;
  document.getElementById('ida-target-n').value = t;
 }
}

function calcGanzoni() {
 var wtEl = document.getElementById('ida-wt-n');
 if (!wtEl) return;
 var w = parseFloat(wtEl.value);
 var hb = parseFloat(document.getElementById('ida-hb-n').value);
 var target = parseFloat(document.getElementById('ida-target-n').value);
 var valEl = document.getElementById('ida-ganzoni-val');
 var textEl = document.getElementById('ida-ganzoni-text');
 if (!isFinite(w) || !isFinite(hb) || !isFinite(target) || w <= 0) { valEl.textContent='— mg'; textEl.textContent=''; return; }
 var depot = w < 35 ? w*15 : 500;
 var deficit;
 if (target <= hb) {
  deficit = 0;
  textEl.textContent = 'Actual Hb is at or above target — formula shows no hemoglobin-deficit component. Iron stores component alone (' + Math.round(depot) + ' mg) may still apply if ferritin is low.';
 } else {
  deficit = Math.round((w*(target-hb)*2.4 + depot)/10)*10;
  textEl.textContent = 'Includes ' + Math.round(depot) + ' mg iron-store component (' + (w<35 ? '15 mg/kg, weight <35 kg' : '500 mg fixed, weight ≥35 kg') + ').';
 }
 valEl.textContent = deficit + ' mg';
 var ivDeficit = document.getElementById('ida-iv-deficit'), ivDeficitN = document.getElementById('ida-iv-deficit-n');
 if (ivDeficit) {
  if (!idaDeficitManual) { ivDeficit.value = deficit; ivDeficitN.value = deficit; }
  calcIV();
 }
}

function calcTable() {
 var wtEl = document.getElementById('ida-wt-n');
 if (!wtEl) return;
 var w = parseFloat(wtEl.value);
 var hb = parseFloat(document.getElementById('ida-hb-n').value);
 var valEl = document.getElementById('ida-table-val');
 var textEl = document.getElementById('ida-table-text');
 if (!isFinite(w) || !isFinite(hb)) { valEl.textContent='— mg'; textEl.textContent=''; return; }
 if (w < 35) { valEl.textContent='— mg'; textEl.textContent='Table method is not validated below 35 kg — use the Ganzoni formula instead.'; return; }
 var dose = hb < 10 ? (w < 70 ? 1500 : 2000) : (w < 70 ? 1000 : 1500);
 valEl.textContent = dose + ' mg';
 textEl.textContent = 'Based on Hb ' + (hb<10 ? '<10 g/dL' : '≥10 g/dL') + ' and weight ' + (w<70 ? '35–<70 kg' : '≥70 kg') + ', per ferric carboxymaltose simplified dosing table.';
}

function idaUpdateTsatMode() {
 var mode = document.querySelector('input[name="ida-tsat-mode"]:checked').value;
 document.getElementById('ida-tsat-direct-fields').style.display = mode === 'direct' ? '' : 'none';
 document.getElementById('ida-tsat-calc-fields').style.display = mode === 'calc' ? '' : 'none';
 calcIron();
}

function calcIron() {
 var ferritinEl = document.getElementById('ida-ferritin');
 if (!ferritinEl) return;
 var ferritin = parseFloat(ferritinEl.value);
 var mode = document.querySelector('input[name="ida-tsat-mode"]:checked').value;
 var tsat;
 if (mode === 'direct') {
  tsat = parseFloat(document.getElementById('ida-tsat-n').value);
 } else {
  var iron = parseFloat(document.getElementById('ida-iron-n').value);
  var tibc = parseFloat(document.getElementById('ida-tibc-n').value);
  tsat = (isFinite(iron) && isFinite(tibc) && tibc > 0) ? (iron/tibc)*100 : NaN;
 }
 var inflamed = document.getElementById('ida-inflam').checked;
 var verdictEl = document.getElementById('ida-iron-verdict');
 var badgeEl = document.getElementById('ida-iron-badge');
 if (!isFinite(ferritin)) { verdictEl.textContent='—'; badgeEl.textContent='—'; badgeEl.style.background='var(--surface2)'; return; }
 var verdict, color, badgeText;
 if (!inflamed) {
  if (ferritin < 15) { verdict='Absolute iron deficiency confirmed'; color='#ef4444'; badgeText='Deficient'; }
  else if (ferritin < 30) { verdict='Probable iron deficiency'; color='#ef4444'; badgeText='Likely deficient'; }
  else if (isFinite(tsat) && tsat < 20) { verdict='Possible iron deficiency — low TSAT despite ferritin >30'; color='#f59e0b'; badgeText='Indeterminate'; }
  else if (ferritin > 100 && isFinite(tsat) && tsat >= 20) { verdict='Iron deficiency unlikely'; color='#10b981'; badgeText='Repleted'; }
  else { verdict='Indeterminate — correlate clinically'; color='#f59e0b'; badgeText='Indeterminate'; }
 } else {
  if (ferritin < 100) { verdict='Iron deficiency likely despite inflammation/CKD'; color='#ef4444'; badgeText='Deficient'; }
  else if (ferritin <= 300 && isFinite(tsat) && tsat < 20) { verdict='Consistent with functional iron deficiency'; color='#f59e0b'; badgeText='Functional deficiency'; }
  else { verdict='Iron deficiency unlikely — stores appear replete'; color='#10b981'; badgeText='Repleted'; }
 }
 verdictEl.textContent = verdict + (isFinite(tsat) ? ' (TSAT '+tsat.toFixed(1)+'%)' : '');
 badgeEl.textContent = badgeText; badgeEl.style.color = color; badgeEl.style.background = color+'22';
}

function calcOral() {
 var ageEl = document.querySelector('input[name="ida-o-age"]:checked');
 if (!ageEl) return;
 var age = ageEl.value;
 var regimen = document.querySelector('input[name="ida-o-regimen"]:checked').value;
 var weight = parseFloat(document.getElementById('ida-wt-n').value);
 var target, text;
 if (age === 'child') {
  target = isFinite(weight) ? Math.round(weight*5) : NaN;
  text = 'Paediatric dosing ≈3–6 mg/kg/day elemental iron, divided. Shown at 5 mg/kg/day midpoint' + (isFinite(weight) ? ' for '+weight+' kg.' : '.');
 } else if (regimen === 'altday') {
  target = 60;
  text = 'Alternate-day dosing: a single dose of 60–120 mg elemental iron every other day. Lower end shown — titrate to tolerability.';
 } else {
  target = 100;
  text = 'Daily divided dosing: 100–200 mg/day elemental iron in 1–2 doses. Lower end shown — higher doses increase GI side effects without proportionally more absorption.';
 }
 document.getElementById('ida-oral-val').textContent = (isFinite(target) ? target : '—') + ' mg/day';
 document.getElementById('ida-oral-text').textContent = text;
 var tbody = document.getElementById('ida-oral-table');
 var html = '';
 idaSalts.forEach(function(s) {
  var elementalPerTab = s.tabletMg * s.elementalPct;
  var tabsNeeded = isFinite(target) ? (target/elementalPerTab) : NaN;
  html += '<tr><td>'+s.name+'</td><td>'+elementalPerTab.toFixed(0)+' mg</td><td>'+(isFinite(tabsNeeded)?tabsNeeded.toFixed(1):'—')+'</td></tr>';
 });
 tbody.innerHTML = html;
}

function calcIV() {
 var deficitEl = document.getElementById('ida-iv-deficit-n');
 if (!deficitEl) return;
 var deficit = parseFloat(deficitEl.value);
 var weight = parseFloat(document.getElementById('ida-wt-n').value);
 var tbody = document.getElementById('ida-iv-table');
 tbody.innerHTML = '';
 if (!isFinite(deficit) || deficit <= 0 || !isFinite(weight)) return;
 idaIVProducts.forEach(function(p) {
  var maxPer = Math.max(1, Math.round(p.maxDose(weight, deficit)));
  var infusions = Math.ceil(deficit / maxPer);
  tbody.innerHTML += '<tr><td>'+p.name+'</td><td>'+maxPer+' mg</td><td>'+infusions+'</td><td style="font-size:10px;color:var(--text-faint)">'+p.note+'</td></tr>';
 });
}

function idaPullDeficit() {
 var val = document.getElementById('ida-ganzoni-val').textContent.replace(/[^\d.]/g,'');
 if (val) {
  idaDeficitManual = false;
  document.getElementById('ida-iv-deficit').value = val;
  document.getElementById('ida-iv-deficit-n').value = val;
  calcIV();
 }
}

/* ══════════ Thyroid Function Assessment ══════════ */
var thyUnits = { ft4:'ngdl', ft3:'pgml' };
var THY_FT4_TO_PMOL = 12.87, THY_FT3_TO_PMOL = 1.536;

var thyHyperSymptoms = [
 { id:'breathless', w:1, text:'Breathlessness on exertion' },
 { id:'palpitations', w:2, text:'Palpitations' },
 { id:'tiring', w:2, text:'Tiring easily' },
 { id:'sweating', w:3, text:'Excessive sweating' },
 { id:'nervous', w:2, text:'Nervousness / restlessness' },
 { id:'goitre', w:3, text:'Swelling at front of neck (goitre)' },
 { id:'exophthalmos', w:2, text:'Bulging eyes (exophthalmos)' },
 { id:'eyelid', w:2, text:'Eyelid retraction' },
 { id:'tremor', w:1, text:'Fine finger tremor' },
 { id:'warmmoist', w:3, text:'Hands warm and moist' },
 { id:'afib', w:4, text:'Irregular heartbeat (doctor-diagnosed AFib)' }
];
var thyHypoSymptoms = [
 { id:'coldintol', w:4, text:'Cold intolerance' },
 { id:'dimsweat', w:6, text:'Diminished sweating' },
 { id:'dryskin', w:3, text:'Dry skin' },
 { id:'coarseskin', w:7, text:'Coarse / rough skin' },
 { id:'coldskin', w:3, text:'Skin cold to the touch' },
 { id:'puffy', w:4, text:'Puffiness around the eyes' },
 { id:'constipation', w:2, text:'Constipation' },
 { id:'weightgain', w:1, text:'Weight gain' },
 { id:'hoarse', w:5, text:'Hoarse / husky voice' },
 { id:'paraesthesia', w:5, text:'Tingling in hands/feet (paraesthesia)' },
 { id:'slowed', w:11, text:'Slowed movement / reactions' }
];

function thyBuildChecklists() {
 var hyperWrap = document.getElementById('thy-hyperChecks');
 if (hyperWrap && !hyperWrap.dataset.built) {
  hyperWrap.dataset.built = '1';
  hyperWrap.innerHTML = thyHyperSymptoms.map(function(s) {
   return '<label class="thy-check-item"><input type="checkbox" id="thy-h-'+s.id+'" onchange="calcThyroid()"><span>'+s.text+'</span><span class="thy-check-w">+'+s.w+'</span></label>';
  }).join('');
 }
 var hypoWrap = document.getElementById('thy-hypoChecks');
 if (hypoWrap && !hypoWrap.dataset.built) {
  hypoWrap.dataset.built = '1';
  hypoWrap.innerHTML = thyHypoSymptoms.map(function(s) {
   return '<label class="thy-check-item"><input type="checkbox" id="thy-p-'+s.id+'" onchange="calcThyroid()"><span>'+s.text+'</span><span class="thy-check-w">+'+s.w+'</span></label>';
  }).join('');
 }
}

function thyToggleUnitDd(field, e) {
 e.stopPropagation();
 var wrap = document.getElementById('thyDdWrap-'+field);
 var wasOpen = wrap.classList.contains('open');
 thyCloseAllUnitDd();
 if (!wasOpen) wrap.classList.add('open');
}
function thyCloseAllUnitDd() {
 document.querySelectorAll('.thy-unit-dd.open').forEach(function(w){ w.classList.remove('open'); });
}
document.addEventListener('click', function(e) {
 if (e.target.closest('.thy-unit-dd')) return;
 thyCloseAllUnitDd();
});
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') thyCloseAllUnitDd(); });

function thySetUnit(field, unit, optEl) {
 var oldUnit = thyUnits[field];
 var numEl = document.getElementById('thy-'+field);
 var current = parseFloat(numEl.value);
 var converted = current;
 if (field === 'ft4') {
  if (unit === 'pmol' && oldUnit !== unit && isFinite(current)) converted = +(current*THY_FT4_TO_PMOL).toFixed(1);
  else if (unit === 'ngdl' && oldUnit !== unit && isFinite(current)) converted = +(current/THY_FT4_TO_PMOL).toFixed(2);
 } else {
  if (unit === 'pmol' && oldUnit !== unit && isFinite(current)) converted = +(current*THY_FT3_TO_PMOL).toFixed(2);
  else if (unit === 'pgml' && oldUnit !== unit && isFinite(current)) converted = +(current/THY_FT3_TO_PMOL).toFixed(2);
 }
 thyUnits[field] = unit;
 numEl.value = converted;
 document.getElementById('thyUnitLabel-'+field).textContent = optEl.textContent;
 var panel = document.getElementById('thyUnitPanel-'+field);
 panel.querySelectorAll('.thy-unit-dd-opt').forEach(function(o){ o.classList.remove('selected'); });
 optEl.classList.add('selected');
 thyCloseAllUnitDd();
 var hintEl = document.getElementById('thy-'+field+'-hint');
 if (field === 'ft4') hintEl.textContent = unit === 'ngdl' ? 'Normal: 0.8–1.8 ng/dL' : 'Normal: 10.3–23.2 pmol/L';
 else if (field === 'ft3') hintEl.textContent = unit === 'pgml' ? 'Normal: 2.3–4.2 pg/mL' : 'Normal: 3.5–6.5 pmol/L';
 calcThyroid();
}

function thyTogglePregnant() {
 var checked = document.getElementById('thy-pregnant').checked;
 var box = document.getElementById('thy-trimester-box');
 if (checked) {
  box.style.display = 'flex';
  box.classList.remove('thy-trimester-collapsed');
 } else {
  box.style.display = 'none';
 }
 calcThyroid();
}

function thyTrimesterPick() {
 calcThyroid();
 var box = document.getElementById('thy-trimester-box');
 box.classList.add('thy-trimester-collapsed');
 setTimeout(function() {
  if (box.classList.contains('thy-trimester-collapsed')) box.style.display = 'none';
 }, 300);
}

function thyNum(id) {
 var ntEl = document.getElementById(id+'-nt');
 if (ntEl && ntEl.checked) return null;
 var el = document.getElementById(id);
 if (!el) return null;
 var v = el.value;
 return v === '' ? null : parseFloat(v);
}

function thyToggleNotTested(field) {
 var nt = document.getElementById('thy-'+field+'-nt').checked;
 document.getElementById('thy-'+field).disabled = nt;
 calcThyroid();
}

function thySumChecks(items, prefix) {
 var sum = 0;
 items.forEach(function(s) {
  var el = document.getElementById(prefix+s.id);
  if (el && el.checked) sum += s.w;
 });
 return sum;
}

function thyClassify(tsh, ft4, ft3, tpo, trab, age, pregnant, trimester) {
 var tshLow = 0.4, tshHigh = 4.0, note = '';
 if (pregnant) {
  if (trimester === '1') { tshLow=0.1; tshHigh=2.5; note='(1st-trimester range applied)'; }
  else if (trimester === '2') { tshLow=0.2; tshHigh=3.0; note='(2nd-trimester range applied)'; }
  else { tshLow=0.3; tshHigh=3.0; note='(3rd-trimester range applied)'; }
 } else if (age !== null && age >= 65) {
  tshHigh = 6.0; note = '(TSH upper limit adjusted for age)';
 }
 var ft4Low=0.8, ft4High=1.8, ft3Low=2.3, ft3High=4.2;
 var ft4n = ft4, ft3n = ft3;
 if (ft4 !== null && thyUnits.ft4 === 'pmol') ft4n = ft4 / THY_FT4_TO_PMOL;
 if (ft3 !== null && thyUnits.ft3 === 'pmol') ft3n = ft3 / THY_FT3_TO_PMOL;

 var result = { status:'unknown', severity:'indeterminate', explain:'', pills:[] };
 if (tsh === null) {
  result.status = 'Enter values to see your result';
  result.explain = 'Enter at least a TSH value above. Adding FT4/FT3 gives a more precise analysis.';
  return result;
 }
 if (tsh > tshHigh) {
  if (ft4n !== null) {
   if (ft4n < ft4Low) { result.status='Overt hypothyroidism'; result.severity='high-low'; result.explain='TSH is high and FT4 is low — consistent with active hypothyroidism. '+note; }
   else { result.status='Subclinical hypothyroidism'; result.severity='mild-low'; result.explain='TSH is high but FT4 is normal — may indicate early-stage hypothyroidism. '+note; }
  } else { result.status='High TSH — hypothyroid pattern likely'; result.severity='mild-low'; result.explain='Add an FT4 value to confirm whether this is overt or subclinical. '+note; }
 } else if (tsh < tshLow) {
  if (ft4n !== null || ft3n !== null) {
   var overt = (ft4n !== null && ft4n > ft4High) || (ft3n !== null && ft3n > ft3High);
   if (overt) { result.status='Overt hyperthyroidism'; result.severity='high-high'; result.explain='TSH is low and FT4/FT3 is high — consistent with active hyperthyroidism/thyrotoxicosis. '+note; }
   else { result.status='Subclinical hyperthyroidism'; result.severity='mild-high'; result.explain='TSH is low but FT4/FT3 is normal — may indicate early-stage hyperthyroidism. '+note; }
  } else { result.status='Low TSH — hyperthyroid pattern likely'; result.severity='mild-high'; result.explain='Add an FT4/FT3 value to confirm whether this is overt or subclinical. '+note; }
 } else {
  if (ft4n !== null && (ft4n < ft4Low || ft4n > ft4High)) { result.status='Unusual pattern — needs specialist review'; result.severity='indeterminate'; result.explain='TSH is normal but FT4 is abnormal — a rare pattern (e.g. pituitary/hypothalamic cause, or illness-related change). See an endocrinologist.'; }
  else { result.status='Euthyroid (normal thyroid function)'; result.severity='normal'; result.explain='Both TSH and FT4 fall within the normal range. '+note; }
 }
 if (tpo !== null && tpo > 34) result.pills.push({ text:'Anti-TPO positive → suggests autoimmune thyroid disease', cls:'high' });
 if (trab !== null && trab > 1.75) result.pills.push({ text:"TRAb positive → suggests Graves' disease", cls:'high' });
 return result;
}

function calcThyroid() {
 var tshEl = document.getElementById('thy-tsh');
 if (!tshEl) return;
 var tsh = thyNum('thy-tsh'), ft4 = thyNum('thy-ft4'), ft3 = thyNum('thy-ft3'),
     tpo = thyNum('thy-tpo'), trab = thyNum('thy-trab'), age = thyNum('thy-age');
 var pregnant = document.getElementById('thy-pregnant').checked;
 var trimesterEl = document.querySelector('input[name="thy-trimester"]:checked');
 var trimester = trimesterEl ? trimesterEl.value : '1';

 var res = thyClassify(tsh, ft4, ft3, tpo, trab, age, pregnant, trimester);

 var hyperSum = thySumChecks(thyHyperSymptoms, 'thy-h-');
 ['weather','appetite','weight'].forEach(function(g) {
  var checked = document.querySelector('input[name="thy-'+g+'"]:checked');
  if (checked) hyperSum += parseFloat(checked.value);
 });
 var hr = thyNum('thy-hr');
 if (hr !== null) { if (hr > 90) hyperSum += 3; else if (hr < 80) hyperSum -= 3; }
 var hyperLabel = hyperSum >= 20 ? 'suggests thyrotoxicosis' : (hyperSum >= 11 ? 'equivocal' : 'unlikely');
 var hyperTag = document.getElementById('thy-hyper-tag');
 if (hyperTag) hyperTag.textContent = hyperSum + ' — ' + hyperLabel;

 var hypoSum = thySumChecks(thyHypoSymptoms, 'thy-p-');
 if (hr !== null && hr < 75) hypoSum += 4;
 var hypoLabel = hypoSum >= 25 ? 'high probability' : (hypoSum >= 10 ? 'equivocal' : 'low probability');
 var hypoTag = document.getElementById('thy-hypo-tag');
 if (hypoTag) hypoTag.textContent = hypoSum + ' — ' + hypoLabel;

 var statusEl = document.getElementById('thy-status');
 statusEl.textContent = res.status;
 document.getElementById('thy-explain').textContent = res.explain;

 var statusColorMap = { normal:'#10b981', 'mild-low':'#f59e0b', 'high-low':'#ef4444', 'mild-high':'#f59e0b', 'high-high':'#ef4444', indeterminate:'#0d9488', unknown:'#0d9488' };
 statusEl.style.color = statusColorMap[res.severity] || '#0d9488';

 var pillRow = document.getElementById('thy-pills');
 var pillsHtml = '<span class="thy-pill">Hyper score: '+hyperSum+' | Hypo score: '+hypoSum+'</span>';
 res.pills.forEach(function(p) {
  var color = p.cls === 'high' ? '#ef4444' : '#f59e0b';
  pillsHtml += '<span class="thy-pill" style="background:'+color+'22;color:'+color+'">'+p.text+'</span>';
 });
 pillRow.innerHTML = pillsHtml;
}

function calcMAP() {
 const sbp = parseFloat(document.getElementById('map-sbp-n').value) || 120;
 const dbp = parseFloat(document.getElementById('map-dbp-n').value) || 80;
 const map = +(dbp + (sbp - dbp) / 3).toFixed(0);
 const pp  = +(sbp - dbp).toFixed(0);
 document.getElementById('map-result-val').textContent = map;
 document.getElementById('map-pp-val').textContent = pp;
 const interpEl = document.getElementById('map-result-interp');
 const box = document.getElementById('map-result-box');
 let interp, color;
 if      (map < 50)  { interp = '🔴 Critical — severe hypoperfusion'; color = '#ef4444'; }
 else if (map < 65)  { interp = '🟡 Below target — vasopressor likely needed'; color = '#f59e0b'; }
 else if (map <= 100){ interp = '✅ Within acceptable range'; color = '#10b981'; }
 else if (map <= 120){ interp = '🟡 Hypertensive — consider antihypertensive'; color = '#f59e0b'; }
 else                { interp = '🔴 Hypertensive emergency'; color = '#ef4444'; }
 interpEl.textContent = interp; interpEl.style.color = color;
 box.style.borderColor = color + '60';
}

function calcFWD() {
 const wt = parseFloat(document.getElementById('fwd-wt-n').value) || 60;
 const na = parseFloat(document.getElementById('fwd-na-n').value) || 160;
 const target = parseFloat(document.getElementById('fwd-target-n').value) || 140;
 const sex = document.querySelector('input[name="fwd-sex"]:checked')?.value || 'male';
 const elderly = document.getElementById('fwd-elderly').checked;
 let tbwFrac = sex === 'male' ? 0.6 : 0.5;
 if (elderly) tbwFrac -= 0.05;
 const tbw = tbwFrac * wt;
 const fwd = tbw * ((na / target) - 1);
 const valEl = document.getElementById('fwd-result-val');
 const interpEl = document.getElementById('fwd-result-interp');
 const box = document.getElementById('fwd-result-box');
 if (fwd <= 0) {
  valEl.textContent = '0.0 L';
  interpEl.textContent = 'No free water deficit — current Na⁺ ≤ target';
  interpEl.style.color = 'var(--text-muted)';
  box.style.borderColor = 'var(--border-strong)';
  return;
 }
 valEl.textContent = fwd.toFixed(2) + ' L';
 const half = (fwd / 2).toFixed(2);
 let color = fwd > 6 ? '#ef4444' : (fwd > 3 ? '#f59e0b' : '#10b981');
 interpEl.innerHTML = 'Replace ≈' + half + ' L in first 24h (+ ongoing losses), remainder over next 24–48h';
 interpEl.style.color = color;
 box.style.borderColor = color + '60';
}

function calcDIC() {
 const plt    = parseInt(document.querySelector('input[name="dic-plt"]:checked')?.value    || 0);
 const pt     = parseInt(document.querySelector('input[name="dic-pt"]:checked')?.value     || 0);
 const fib    = parseInt(document.querySelector('input[name="dic-fib"]:checked')?.value    || 0);
 const ddimer = parseInt(document.querySelector('input[name="dic-ddimer"]:checked')?.value || 0);
 const score  = plt + pt + fib + ddimer;
 document.getElementById('dic-score').textContent = score;
 const interp = document.getElementById('dic-interp');
 const mgmt   = document.getElementById('dic-management');
 const box    = document.getElementById('dic-result-box');
 if (score >= 5) {
  interp.textContent = '🔴 Overt DIC'; interp.style.color = '#ef4444';
  box.style.borderColor = '#ef444460';
  mgmt.innerHTML = '<span class="bl-dot"></span> Treat underlying cause urgently<br><span class="bl-dot"></span> FFP 10–15 ml/kg if bleeding + PT prolonged<br><span class="bl-dot"></span> Platelet transfusion if &lt;50×10⁹/L + active bleeding<br><span class="bl-dot"></span> Cryoprecipitate if fibrinogen &lt;1.5 g/L<br><span class="bl-dot"></span> Repeat score daily; reassess coagulation 6–12hrly';
 } else if (score >= 3) {
  interp.textContent = '🟡 Probable / Non-overt DIC'; interp.style.color = '#f59e0b';
  box.style.borderColor = '#f59e0b60';
  mgmt.innerHTML = '<span class="bl-dot"></span> Monitor closely; repeat labs in 12–24hr<br><span class="bl-dot"></span> Treat predisposing condition<br><span class="bl-dot"></span> Transfuse only if bleeding or planned invasive procedure<br><span class="bl-dot"></span> Consider prophylactic LMWH if thrombosis-predominant';
 } else {
  interp.textContent = '✅ DIC unlikely'; interp.style.color = '#10b981';
  box.style.borderColor = '#10b98160';
  mgmt.innerHTML = '<span class="bl-dot"></span> Continue monitoring if high clinical suspicion<br><span class="bl-dot"></span> Repeat score in 24–48hr if predisposing condition persists';
 }
}

function calcHemolysis() {
 const ldh    = parseFloat(document.getElementById('hemo-ldh-n')?.value)    || 0;
 const haptoRaw = document.getElementById('hemo-hapto-n')?.value;
 const haptoIncluded = haptoRaw !== '' && haptoRaw != null;
 const hapto  = haptoIncluded ? parseFloat(haptoRaw) : null;
 const bili   = parseFloat(document.getElementById('hemo-bili-n')?.value)   || 0;
 const retic  = parseFloat(document.getElementById('hemo-retic-n')?.value)  || 0;
 const hct    = parseFloat(document.getElementById('hemo-hct-n')?.value)    || 45;
 const schisto = document.getElementById('hemo-schisto')?.checked;
 const dat     = document.getElementById('hemo-dat')?.checked;

 const corrRetic = retic * (hct / 45);

 let score = 0;
 let maxScore = 8;
 if (ldh > 375) score += 2; else if (ldh > 250) score += 1;
 if (haptoIncluded) {
  maxScore = 10;
  if (hapto < 30) score += 2; else if (hapto < 50) score += 1;
 }
 if (bili > 1.2) score += 1;
 if (corrRetic > 2.5) score += 1;
 if (schisto) score += 2;
 if (dat) score += 2;

 document.getElementById('hemo-score').textContent = score;
 document.getElementById('hemo-score-max').textContent = '/ ' + maxScore;
 const interp = document.getElementById('hemo-interp');
 const detail = document.getElementById('hemo-detail');
 const box    = document.getElementById('hemo-result-box');

 let detailLines = ['Corrected reticulocyte: <strong>' + corrRetic.toFixed(1) + '%</strong>'];
 if (!haptoIncluded) detailLines.push('Haptoglobin not entered — scored out of ' + maxScore + ' (rarely available; result still valid without it).');
 if (dat) detailLines.push('DAT positive → points toward an <strong>immune-mediated</strong> process (autoimmune, drug-induced, transfusion reaction).');
 if (schisto) detailLines.push('Schistocytes present → points toward a <strong>microangiopathic (MAHA)</strong> process (DIC, TTP/HUS, mechanical, malignant HTN).');
 if (dat && schisto) detailLines.push('Both markers positive — consider overlapping or combined immune + mechanical aetiologies.');

 const pct = score / maxScore;
 if (pct >= 0.6) {
  interp.textContent = '🔴 Haemolysis likely'; interp.style.color = '#ef4444';
  box.style.borderColor = '#ef444460';
 } else if (pct >= 0.3) {
  interp.textContent = '🟡 Possible haemolysis — correlate clinically'; interp.style.color = '#f59e0b';
  box.style.borderColor = '#f59e0b60';
 } else {
  interp.textContent = '✅ Haemolysis unlikely'; interp.style.color = '#10b981';
  box.style.borderColor = '#10b98160';
 }
}

function hemoToggleCalc() {
 const panel = document.getElementById('hemo-calc-panel');
 const btn = document.getElementById('hemo-calc-toggle');
 if (!panel) return;
 const isOpen = panel.style.display !== 'none';
 panel.style.display = isOpen ? 'none' : '';
 if (btn) btn.classList.toggle('hemo-active', !isOpen);
}

function toggleOptional() {
 const box = document.getElementById('optional-fields');
 const btn = document.getElementById('optional-toggle');
 const open = box.style.display === 'block';
 box.style.display = open ? 'none' : 'block';
 btn.innerHTML = open
  ? '＋ Optional: Serum Uric Acid &amp; BUN/Cr Ratio <span style="font-size:9.5px;opacity:0.7">(if available)</span>'
  : '－ Optional: Serum Uric Acid &amp; BUN/Cr Ratio <span style="font-size:9.5px;opacity:0.7">(if available)</span>';
 optionalOpen = !open;
 try { calcSIADH(); } catch(e) {}
}

function setVolStatus(val) {
 volStatus = val;
 ['depleted','normal','expanded'].forEach(v => {
  const b = document.getElementById('vs-' + v);
  if (!b) return;
  b.style.borderColor = v === val ? 'var(--accent)' : 'var(--border)';
  b.style.background  = v === val ? 'var(--accent-dim)' : 'transparent';
  b.style.color       = v === val ? 'var(--accent)' : 'var(--text-faint)';
  b.style.fontWeight  = v === val ? '700' : '600';
 });
 calcSIADH();
}

function calcSIADH() {
 try {
 const sna  = parseFloat(document.getElementById('csw-sna-n').value)   || 122;
 const sosm = parseFloat(document.getElementById('csw-sosm-n').value)  || 268;
 const una  = parseFloat(document.getElementById('csw-una-n').value)   || 80;
 const uosm = parseFloat(document.getElementById('csw-uosm-n').value)  || 600;

 const scoreBox  = document.getElementById('siadh-score-box');
 const scoreRows = document.getElementById('siadh-score-rows');
 const resBox = document.getElementById('siadh-result-box');
 const diag   = document.getElementById('siadh-diagnosis');
 const conf   = document.getElementById('siadh-confidence');
 const mgmt   = document.getElementById('siadh-management');

 // ── Hypernatraemic branch: SIADH/CSW scoring below is for hyponatraemia and
 // does not apply here — route to Cranial DI assessment instead ──
 if (sna > 145) {
  scoreBox.style.display = 'none';
  resBox.style.display = 'block';
  const diluteUrine = uosm < sosm || uosm < 300;
  const color = '#a855f7';
  resBox.style.border = '1px solid ' + color + '50';
  resBox.style.background = color + '14';
  diag.style.color = color;
  conf.style.color = 'var(--text-muted)';
  mgmt.style.color = 'var(--text)';
  if (diluteUrine) {
   diag.textContent = '💧 Likely Cranial DI';
   conf.textContent = 'Hypernatraemia (Na ' + sna + ') with inappropriately dilute urine (Osm ' + uosm + ' < serum Osm ' + sosm + ') — classic Cranial DI pattern, assuming adequate free water access has been excluded as the cause.';
   mgmt.innerHTML = '<span class="bl-dot"></span> <strong>Desmopressin (DDAVP)</strong> trial — urine osm rises &gt;50% confirms Cranial DI (vs nephrogenic, which won\'t respond)<br><span class="bl-dot"></span> Replace free water deficit gradually — <strong>max Na correction 8–10 mmol/L per 24hr</strong> (cerebral oedema risk)<br><span class="bl-dot"></span> Identify cause: post-neurosurgery/TBI (often triphasic response), pituitary tumour, sarcoidosis, idiopathic<br><span class="bl-dot"></span> Strict fluid balance + hourly urine output while diagnosis is confirmed<br><span class="bl-dot"></span> Rule out osmotic diuresis (glucose, urea, mannitol) and nephrogenic DI (lithium, hypercalcaemia, hypokalaemia)';
  } else {
   diag.innerHTML = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Hypernatraemia — DI Uncertain';
   conf.textContent = 'Na ' + sna + ' elevated, but urine Osm (' + uosm + ') is not clearly inappropriate for the serum Osm (' + sosm + ') given here — DI less certain from these numbers alone.';
   mgmt.innerHTML = '<span class="bl-dot"></span> Consider other causes of hypernatraemia: reduced water intake, GI/insensible losses, osmotic diuresis<br><span class="bl-dot"></span> If polyuria is present despite this, still consider partial DI — water deprivation test or desmopressin trial can clarify<br><span class="bl-dot"></span> Correct free water deficit gradually (max 8–10 mmol/L per 24hr)<br><span class="bl-dot"></span> Reassess urine osm once volume status/intake is optimised';
  }
  return;
 }

 // ── Normonatraemic branch (Na 135–145): SIADH/CSW scoring assumes
 // hyponatraemia and Cranial DI assumes hypernatraemia — neither cleanly
 // applies here, so avoid forcing a diagnosis and flag it instead ──
 if (sna >= 135) {
  scoreBox.style.display = 'none';
  resBox.style.display = 'block';
  const color = '#94a3b8';
  resBox.style.border = '1px solid ' + color + '50';
  resBox.style.background = color + '14';
  diag.style.color = color;
  conf.style.color = 'var(--text-muted)';
  mgmt.style.color = 'var(--text)';
  diag.textContent = 'ℹ️ Serum Na⁺ Normal';
  conf.textContent = 'Na ' + sna + ' is within normal range — SIADH/CSW scoring assumes hyponatraemia and does not apply here.';
  mgmt.innerHTML = '<span class="bl-dot"></span> If <strong>polyuria</strong> is present despite normal Na, consider <strong>partial/early Cranial DI</strong> — recheck Na and urine Osm trend, or trial desmopressin<br><span class="bl-dot"></span> If Na is trending down, re-run this tool once it crosses into the hyponatraemic range for SIADH/CSW differentiation<br><span class="bl-dot"></span> Otherwise, look for other causes of the presenting picture (osmotic diuresis, diuretic effect, post-obstructive diuresis, recovering ATN)';
  return;
 }

 // score: positive → SIADH, negative → CSW
 let score = 0;
 const rows = [];

 // Volume status (most weighted)
 if (volStatus === 'depleted') {
  score -= 3;
  rows.push({ param:'Volume Status', val:'⬇ Depleted', pts:-3, note:'Strong CSW indicator' });
 } else if (volStatus === 'normal') {
  score += 1;
  rows.push({ param:'Volume Status', val:'↔ Normal', pts:+1, note:'Favours SIADH' });
 } else {
  score += 2;
  rows.push({ param:'Volume Status', val:'⬆ Expanded', pts:+2, note:'Classic SIADH pattern' });
 }

 // Urine Na
 if (una > 100) {
  score -= 2;
  rows.push({ param:'Urine Na⁺', val:una+' mmol/L', pts:-2, note:'Very high — strongly favours CSW' });
 } else if (una > 40) {
  rows.push({ param:'Urine Na⁺', val:una+' mmol/L', pts:0, note:'Elevated in both — non-differentiating' });
 } else {
  score += 1;
  rows.push({ param:'Urine Na⁺', val:una+' mmol/L', pts:+1, note:'Low — less typical for either' });
 }

 // Urine Osm
 if (uosm > 300) {
  score += 1;
  rows.push({ param:'Urine Osm', val:uosm+' mOsm/kg', pts:+1, note:'Concentrated — supports SIADH' });
 } else {
  score -= 1;
  rows.push({ param:'Urine Osm', val:uosm+' mOsm/kg', pts:-1, note:'Dilute — less consistent with SIADH' });
 }

 // Serum Uric Acid (optional)
 if (optionalOpen) {
  const ua = parseFloat(document.getElementById('csw-ua-n').value) || 3.5;
  if (ua < 4) {
   score += 2;
   rows.push({ param:'Serum Uric Acid', val:ua+' mg/dL', pts:+2, note:'Low — dilutional, favours SIADH' });
  } else if (ua <= 6) {
   score -= 1;
   rows.push({ param:'Serum Uric Acid', val:ua+' mg/dL', pts:-1, note:'Normal-low — slight CSW favour' });
  } else {
   score -= 2;
   rows.push({ param:'Serum Uric Acid', val:ua+' mg/dL', pts:-2, note:'Normal/high — does not support SIADH' });
  }

  const bun = parseFloat(document.getElementById('csw-bun-n').value) || 10;
  if (bun <= 10) {
   score += 2;
   rows.push({ param:'BUN/Cr Ratio', val:bun, pts:+2, note:'Low — dilutional, favours SIADH' });
  } else if (bun <= 15) {
   rows.push({ param:'BUN/Cr Ratio', val:bun, pts:0, note:'Borderline — non-differentiating' });
  } else {
   score -= 2;
   rows.push({ param:'BUN/Cr Ratio', val:bun, pts:-2, note:'Elevated — pre-renal pattern, favours CSW' });
  }
 }

 // Serum Osm context
 if (sosm < 270) {
  score += 1;
  rows.push({ param:'Serum Osm', val:sosm+' mOsm/kg', pts:+1, note:'Low — consistent with hypo-osmolar state' });
 } else {
  rows.push({ param:'Serum Osm', val:sosm+' mOsm/kg', pts:0, note:'Normal range — verify aetiology' });
 }

 // Render parameter rows
 scoreBox.style.display = 'block';
 scoreRows.innerHTML = rows.map(r => {
  const col  = r.pts > 0 ? '#06b6d4' : r.pts < 0 ? '#f97316' : 'var(--text-faint)';
  const sign = r.pts > 0 ? '+' : '';
  const ptsDisplay = r.pts !== 0 ? sign + r.pts : '—';
  return `<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:5px 0;border-bottom:1px solid var(--border);font-size:11px">
   <div style="flex:1;padding-right:6px"><span style="color:var(--text-muted);font-weight:600">${r.param}</span><br><span style="color:var(--text-faint);font-size:10px">${r.note}</span></div>
   <div style="text-align:right;flex-shrink:0"><span style="color:var(--text-strong);font-weight:700;font-size:11px">${r.val}</span><br><span style="color:${col};font-weight:800;font-size:13px">${ptsDisplay}</span></div>
  </div>`;
 }).join('');

 // Determine diagnosis
 resBox.style.display = 'block';

 let dx, color, confidence, management;
 if (score >= 4) {
  dx = '✅ Likely SIADH'; color = '#06b6d4';
  confidence = 'Strong evidence for SIADH (Score: +' + score + ')';
  management = '<span class="bl-dot"></span> <strong>Fluid restrict:</strong> 500–1000 ml/day (below daily urine output)<br><span class="bl-dot"></span> Treat underlying cause (drugs, CNS, pulmonary, malignancy)<br><span class="bl-dot"></span> <strong>Avoid isotonic saline</strong> — worsens hypoNa in euvolaemic SIADH<br><span class="bl-dot"></span> Chronic/mild: consider demeclocycline or tolvaptan<br><span class="bl-dot"></span> Severe symptomatic (&lt;120 + Sx): 3% NaCl — target ≤5 mmol/L rise in 1hr, max 10 mmol/L per 24hr';
 } else if (score >= 2) {
  dx = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Probable SIADH'; color = '#3b82f6';
  confidence = 'Moderate evidence for SIADH (Score: +' + score + ') — clinical correlation essential';
  management = '<span class="bl-dot"></span> Cautious fluid restriction while re-examining volume status<br><span class="bl-dot"></span> Repeat labs 6–12hr<br><span class="bl-dot"></span> <strong>Do NOT give IV saline</strong> until volume status confirmed normal/expanded<br><span class="bl-dot"></span> Treat underlying cause — review all medications';
 } else if (score <= -3) {
  dx = '🔴 Likely CSW'; color = '#f97316';
  confidence = 'Strong evidence for CSW (Score: ' + score + ')';
  management = '<span class="bl-dot"></span> <strong>IV 0.9% NaCl</strong> — volume replacement is the cornerstone<br><span class="bl-dot"></span> Oral NaCl tablets 1–3g TDS with meals<br><span class="bl-dot"></span> Fludrocortisone 0.1–0.2 mg/day (reduces renal Na loss — off-label)<br><span class="bl-dot"></span> <strong>Do NOT fluid restrict</strong> — will worsen haemodynamic instability<br><span class="bl-dot"></span> Monitor electrolytes 6-hourly; Na correction max 10 mmol/L per 24hr';
 } else if (score <= -1) {
  dx = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Probable CSW'; color = '#f59e0b';
  confidence = 'Moderate evidence for CSW (Score: ' + score + ') — clinical correlation essential';
  management = '<span class="bl-dot"></span> Cautious IV fluid trial (NS) and monitor Na response<br><span class="bl-dot"></span> Na improves → confirms CSW; Na worsens → reconsider SIADH<br><span class="bl-dot"></span> Reassess volume status: JVP, skin turgor, fluid balance, BP trend<br><span class="bl-dot"></span> Avoid fluid restriction until diagnosis confirmed';
 } else {
  dx = '❓ Indeterminate'; color = '#94a3b8';
  confidence = 'Insufficient differentiation (Score: ' + score + ') — further workup needed';
  management = '<span class="bl-dot"></span> <strong>FEUA</strong> (Fractional excretion of uric acid): &lt;10% = SIADH, &gt;10% = CSW<br><span class="bl-dot"></span> <strong>NS challenge:</strong> Na rises → CSW; Na worsens → SIADH<br><span class="bl-dot"></span> FENa &lt;0.5% — favours pre-renal/CSW<br><span class="bl-dot"></span> Repeat serum + urine electrolytes after 12hr<br><span class="bl-dot"></span> Consider endocrinology consult';
 }

 resBox.style.border    = '1px solid ' + color + '50';
 resBox.style.background = color + '14';
 diag.style.color        = color;
 diag.innerHTML          = dx;
 conf.style.color        = 'var(--text-muted)';
 conf.textContent        = confidence;
 mgmt.style.color        = 'var(--text)';
 mgmt.innerHTML          = management;
 } catch(e) {}
}

function applyTheme(theme) {
 if (theme === 'light') {
 document.body.setAttribute('data-theme', 'light');
 // In light mode: show dark moon (to indicate "switch to dark")
 document.getElementById('themeIconSun').style.display = 'none';
 document.getElementById('themeIconMoon').style.display = 'block';
 } else {
 document.body.removeAttribute('data-theme');
 // In dark mode: show bright sun (to indicate "switch to light")
 document.getElementById('themeIconSun').style.display = 'block';
 document.getElementById('themeIconMoon').style.display = 'none';
 }
 var metaTC = document.getElementById('themeColorMeta');
 if (metaTC) metaTC.setAttribute('content', theme === 'light' ? '#f6f8fa' : '#0d1117');
 var metaSB = document.getElementById('appleStatusBarMeta');
 if (metaSB) metaSB.setAttribute('content', theme === 'light' ? 'default' : 'black-translucent');
}

function toggleTheme() {
 const current = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
 const next = current === 'light' ? 'dark' : 'light';
 applyTheme(next);
 try { localStorage.setItem('syringe-pump-theme', next); } catch (e) {}
}


// ─────────────────────── SOFA + qSOFA ───────────────────────
function calcSOFA() {
 // qSOFA
 const qRR  = document.getElementById('qsofa-rr')  ? document.getElementById('qsofa-rr').checked  : false;
 const qGCS = document.getElementById('qsofa-gcs') ? document.getElementById('qsofa-gcs').checked : false;
 const qSBP = document.getElementById('qsofa-sbp') ? document.getElementById('qsofa-sbp').checked : false;
 const qScore = (qRR?1:0) + (qGCS?1:0) + (qSBP?1:0);
 const qEl = document.getElementById('qsofa-result');
 if (qEl) {
  const qColor = qScore >= 2 ? '#ef4444' : qScore === 1 ? '#f59e0b' : '#10b981';
  const qLabel = qScore >= 2 ? ' <span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> HIGH RISK — assess full SOFA, obtain cultures/lactate; treat per clinical sepsis probability (not qSOFA alone)' : qScore === 1 ? ' Intermediate — monitor closely' : ' Low risk (qSOFA does not rule out sepsis — use NEWS2/MEWS/SIRS or clinical judgement)';
  qEl.innerHTML = '<span style="color:' + qColor + ';font-weight:800">qSOFA: ' + qScore + ' / 3</span><span style="font-size:10px;color:' + qColor + '">' + qLabel + '</span>';
 }

 // SOFA
 const getRadio = name => { const el = document.querySelector('input[name="' + name + '"]:checked'); return el ? parseInt(el.value) : 0; };
 const resp  = getRadio('sofa-resp');
 const plt   = getRadio('sofa-plt');
 const bili  = getRadio('sofa-bili');
 const cv    = getRadio('sofa-cv');
 const cns   = getRadio('sofa-cns');
 const renal = getRadio('sofa-renal');
 const total = resp + plt + bili + cv + cns + renal;

 const scoreEl = document.getElementById('sofa-score');
 const mortEl  = document.getElementById('sofa-mortality');
 const interpEl = document.getElementById('sofa-interp');
 const detailEl = document.getElementById('sofa-detail');
 const boxEl    = document.getElementById('sofa-result-box');
 if (!scoreEl) return;

 scoreEl.textContent = total;
 let color, interp, mort, detail;
 if (total <= 1)       { color='#10b981'; interp='✅ Minimal dysfunction'; mort='Low organ-dysfunction burden'; detail='No significant organ failure. Continue monitoring.'; }
 else if (total <= 3)  { color='#10b981'; interp='🟢 Low dysfunction'; mort='Mild organ-dysfunction burden'; detail='Mild compromise. Optimise fluid status, treat underlying cause.'; }
 else if (total <= 6)  { color='#f59e0b'; interp='🟡 Moderate dysfunction'; mort='Moderate organ-dysfunction burden'; detail='Moderate organ failure. ICU-level monitoring essential.'; }
 else if (total <= 9)  { color='#f97316'; interp='🟠 High dysfunction'; mort='High organ-dysfunction burden'; detail='Significant multi-organ failure. Aggressive management required.'; }
 else if (total <= 11) { color='#ef4444'; interp='🔴 Severe dysfunction'; mort='Very high organ-dysfunction burden'; detail='Severe MOF. Consider goals of care discussion.'; }
 else                  { color='#ef4444'; interp='🔴 Critical dysfunction'; mort='Extreme organ-dysfunction burden'; detail='Critical multi-organ failure. Maximal ICU support required.'; }

 scoreEl.style.color = color;
 mortEl.innerHTML  = '<span style="color:' + color + ';font-weight:700">' + mort + '</span><div style="font-size:9px;color:var(--text-faint);margin-top:2px">Higher SOFA correlates with higher mortality risk in cohort studies, but SOFA is an organ-dysfunction description, not a validated individual mortality predictor. Trend (not single value) matters most.</div>';
 interpEl.style.color = color;
 interpEl.textContent = interp;
 detailEl.innerHTML = detail + '<br><span style="font-size:10px;color:var(--text-faint)">Resp:' + resp + ' | Plt:' + plt + ' | Bili:' + bili + ' | CV:' + cv + ' | CNS:' + cns + ' | Renal:' + renal + '</span>';
 if (boxEl) boxEl.style.borderColor = color + '50';

 // ── Push into synced Sepsis-3 card ──
 syncSepsis3FromSOFA(qRR, qGCS, qSBP, resp, plt, bili, cv, cns, renal);
}

function syncSepsis3FromSOFA(qRR, qGCS, qSBP, resp, plt, bili, cv, cns, renal) {
 const qMap = { 's3-q-rr': qRR, 's3-q-gcs': qGCS, 's3-q-sbp': qSBP };
 Object.keys(qMap).forEach(id => {
   const el = document.getElementById(id);
   if (el) el.checked = qMap[id];
 });
 const sofaMap = {
   's3-row-resp': resp, 's3-row-coag': plt, 's3-row-liver': bili,
   's3-row-cvs': cv, 's3-row-cns': cns, 's3-row-renal': renal
 };
 Object.keys(sofaMap).forEach(id => {
   const row = document.getElementById(id);
   if (!row) return;
   const val = sofaMap[id];
   row.dataset.score = val;
   const pills = row.querySelectorAll('.s3-pill');
   pills.forEach(p => p.classList.remove('sel'));
   if (pills[val]) pills[val].classList.add('sel');
 });
 if (typeof calcSepsis3 === 'function') calcSepsis3();
}

// ─────────────────────── BERLIN ARDS ───────────────────────
function calcARDS() {
 const pao2 = parseFloat(document.getElementById('ards-pao2-n') ? document.getElementById('ards-pao2-n').value : 80) || 80;
 const fio2 = parseFloat(document.getElementById('ards-fio2-n') ? document.getElementById('ards-fio2-n').value : 0.40) || 0.40;
 const pf   = Math.round(pao2 / fio2);

 const pfEl = document.getElementById('ards-pf-display');
 if (pfEl) {
  let pfColor = pf <= 100 ? '#ef4444' : pf <= 200 ? '#f97316' : pf <= 300 ? '#f59e0b' : '#10b981';
  pfEl.innerHTML = '<span style="color:' + pfColor + '">P/F = ' + pf + ' mmHg</span>';
 }

 const timing = document.getElementById('berlin-timing') ? document.getElementById('berlin-timing').checked : false;
 const cxr    = document.getElementById('berlin-cxr')    ? document.getElementById('berlin-cxr').checked    : false;
 const origin = document.getElementById('berlin-origin') ? document.getElementById('berlin-origin').checked : false;
 const peep   = document.getElementById('berlin-peep')   ? document.getElementById('berlin-peep').checked   : false;
 const allMet = timing && cxr && origin && peep;

 const sevEl  = document.getElementById('ards-severity');
 const pfcEl  = document.getElementById('ards-pf-class');
 const mgtEl  = document.getElementById('ards-management');
 const boxEl  = document.getElementById('ards-result-box');
 if (!sevEl) return;

 if (!allMet) {
  sevEl.style.color = 'var(--text-faint)'; sevEl.textContent = '— Berlin Criteria Incomplete —';
  pfcEl.textContent = 'Tick all 4 criteria above to classify';
  mgtEl.textContent = ''; if (boxEl) boxEl.style.borderColor = 'var(--border-strong)';
  return;
 }

 let severity, color, management;
 if      (pf > 300) { severity = '✅ Not ARDS (P/F > 300)';      color = '#10b981'; management = 'All 4 Berlin criteria met but P/F ratio is above ARDS threshold. Consider other diagnoses.'; }
 else if (pf > 200) { severity = '🟡 Mild ARDS (P/F 201–300)';   color = '#f59e0b'; management = 'Lung-protective ventilation (6ml/kg IBW). Consider NIV/HFNC. Frequent reassessment. PEEP optimisation.'; }
 else if (pf > 100) { severity = '🟠 Moderate ARDS (P/F 101–200)'; color = '#f97316'; management = 'Mandatory LPV: TV 6ml/kg IBW, Pplat ≤30 cmH₂O. PEEP ladder titration. <strong>Prone if P/F &lt;150</strong>. Cisatracurium NMBA consider. Fluid conservative strategy.'; }
 else               { severity = '🔴 Severe ARDS (P/F ≤100)';    color = '#ef4444'; management = '<strong>Prone positioning ≥16h/day (mandatory).</strong> NMBA (cisatracurium 37.5mg/hr). Recruitment manoeuvres with caution. Refer for ECMO if P/F &lt;80 despite optimal care. Permissive hypercapnia (pH ≥7.20).'; }

 sevEl.style.color  = color; sevEl.innerHTML = severity;
 pfcEl.style.color  = color; pfcEl.textContent = 'All 4 Berlin criteria met • P/F = ' + pf + ' mmHg on PEEP ≥5';
 mgtEl.innerHTML    = management;
 if (boxEl) boxEl.style.borderColor = color + '60';
}

// ─────────────────────── WELLS SCORE — PULMONARY EMBOLISM ───────────────────────
function calcWellsPE() {
 const flags = [
  ['wpe-dvt', 3], ['wpe-altdx', 3], ['wpe-hr', 1.5],
  ['wpe-immob', 1.5], ['wpe-prior', 1.5], ['wpe-hemo', 1], ['wpe-malig', 1]
 ];
 let total = 0;
 flags.forEach(([id, wt]) => { const el = document.getElementById(id); if (el && el.checked) total += wt; });

 const titleEl = document.getElementById('wpe-result-title');
 const detEl   = document.getElementById('wpe-result-detail');
 const boxEl   = document.getElementById('wpe-result');
 if (!titleEl) return;

 let tier, prevalence, color, borderColor;
 if      (total <= 1) { tier = 'Low Probability';      prevalence = '≈1–3%';   color = '#10b981'; borderColor = '#10b98140'; }
 else if (total <= 6) { tier = 'Moderate Probability'; prevalence = '≈16–28%'; color = 'var(--accent)'; borderColor = 'var(--border)'; }
 else                 { tier = 'High Probability';     prevalence = '≈38–78%'; color = '#ef4444'; borderColor = '#ef444460'; }

 const dichot = total > 4
  ? '"PE Likely" → proceed to CTPA'
  : '"PE Unlikely" → D-dimer to help exclude PE';

 titleEl.style.color = color;
 titleEl.innerHTML   = '🎯 Wells Score: ' + total + ' — ' + tier;
 detEl.innerHTML     = 'Est. PE prevalence ' + prevalence + '.<br><strong>Dichotomised:</strong> ' + dichot;
 if (boxEl) boxEl.style.borderColor = borderColor;
}

// ─────────────────────── ABG INTERPRETER ───────────────────────
function calcABG() {
 const ph   = parseFloat(document.getElementById('abg-ph-n')   ? document.getElementById('abg-ph-n').value   : 7.40) || 7.40;
 const pco2 = parseFloat(document.getElementById('abg-pco2-n') ? document.getElementById('abg-pco2-n').value : 40)   || 40;
 const hco3 = parseFloat(document.getElementById('abg-hco3-n') ? document.getElementById('abg-hco3-n').value : 24)   || 24;
 const pao2 = parseFloat(document.getElementById('abg-pao2-n') ? document.getElementById('abg-pao2-n').value : 95)   || 95;
 const na   = parseFloat(document.getElementById('abg-na-n')   ? document.getElementById('abg-na-n').value   : 140)  || 140;
 const cl   = parseFloat(document.getElementById('abg-cl-n')   ? document.getElementById('abg-cl-n').value   : 102)  || 102;

 const primaryEl = document.getElementById('abg-primary');
 const stepsEl   = document.getElementById('abg-steps');
 const boxEl     = document.getElementById('abg-result-box');
 const critEl    = document.getElementById('abg-critical-alert');
 if (!primaryEl) return;

 let steps = [];
 let primaryLabel = '', primaryColor = '#10b981';

 // Step 1: pH
 const acidaemia   = ph < 7.35;
 const alkalaemia  = ph > 7.45;
 const normalPH    = !acidaemia && !alkalaemia;
 steps.push('<b>Step 1 — pH:</b> ' + ph.toFixed(2) + ' → ' + (acidaemia ? '<span style="color:#ef4444">Acidaemia</span>' : alkalaemia ? '<span style="color:#f59e0b">Alkalaemia</span>' : '<span style="color:#10b981">Normal</span>'));

 // Step 2: Primary disorder
 let disorder = '';
 if      (acidaemia  && pco2 > 45)  { disorder = 'Respiratory Acidosis';  primaryColor = '#ef4444'; }
 else if (acidaemia  && hco3 < 22)  { disorder = 'Metabolic Acidosis';    primaryColor = '#ef4444'; }
 else if (alkalaemia && pco2 < 35)  { disorder = 'Respiratory Alkalosis'; primaryColor = '#f59e0b'; }
 else if (alkalaemia && hco3 > 26)  { disorder = 'Metabolic Alkalosis';   primaryColor = '#f59e0b'; }
 else if (normalPH   && pco2 > 45 && hco3 > 26) { disorder = 'Compensated Respiratory Acidosis / Metabolic Alkalosis'; primaryColor = '#f59e0b'; }
 else if (normalPH   && pco2 < 35 && hco3 < 22) { disorder = 'Compensated Respiratory Alkalosis / Metabolic Acidosis'; primaryColor = '#06b6d4'; }
 else    { disorder = 'Normal ABG'; primaryColor = '#10b981'; }
 steps.push('<b>Step 2 — Primary:</b> <span style="color:' + primaryColor + '">' + disorder + '</span>');

 // Step 3: Compensation check
 let compText = '';
 if (disorder === 'Metabolic Acidosis') {
  const expPCO2lo = (1.5 * hco3 + 8) - 2;
  const expPCO2hi = (1.5 * hco3 + 8) + 2;
  compText = "Winter's expected PaCO₂: " + expPCO2lo.toFixed(1) + '–' + expPCO2hi.toFixed(1) + ' | Actual: ' + pco2;
  if      (pco2 < expPCO2lo) compText += ' → <span style="color:#f59e0b">+ Concurrent Resp. Alkalosis</span>';
  else if (pco2 > expPCO2hi) compText += ' → <span style="color:#ef4444">+ Concurrent Resp. Acidosis</span>';
  else                        compText += ' → <span style="color:#10b981">Adequate compensation</span>';
 } else if (disorder === 'Metabolic Alkalosis') {
  const expPCO2 = 0.7 * hco3 + 21;
  compText = 'Expected PaCO₂: ' + (expPCO2 - 2).toFixed(1) + '–' + (expPCO2 + 2).toFixed(1) + ' | Actual: ' + pco2;
  if (Math.abs(pco2 - expPCO2) <= 2) compText += ' → <span style="color:#10b981">Adequate compensation</span>';
  else compText += (pco2 < expPCO2 - 2) ? ' → <span style="color:#f59e0b">Under-compensated</span>' : ' → <span style="color:#ef4444">+ Concurrent Resp. Acidosis</span>';
 } else if (disorder === 'Respiratory Acidosis') {
  const expHCO3acute = 24 + ((pco2 - 40) / 10) * 1;
  const expHCO3chron = 24 + ((pco2 - 40) / 10) * 3.5;
  compText = 'Expected HCO₃: acute ' + expHCO3acute.toFixed(1) + ' / chronic ' + expHCO3chron.toFixed(1) + ' | Actual: ' + hco3;
  if      (Math.abs(hco3 - expHCO3acute) <= 2) compText += ' → <span style="color:var(--accent)">Acute (uncompensated)</span>';
  else if (Math.abs(hco3 - expHCO3chron) <= 3) compText += ' → <span style="color:#10b981">Chronic (compensated)</span>';
  else if (hco3 < expHCO3acute - 2)             compText += ' → <span style="color:#ef4444">Under-compensated / mixed metabolic acidosis</span>';
  else                                           compText += ' → <span style="color:#f59e0b">Over-compensated / mixed metabolic alkalosis</span>';
 } else if (disorder === 'Respiratory Alkalosis') {
  const expHCO3acute = 24 - ((40 - pco2) / 10) * 2;
  const expHCO3chron = 24 - ((40 - pco2) / 10) * 5;
  compText = 'Expected HCO₃: acute ' + expHCO3acute.toFixed(1) + ' / chronic ' + expHCO3chron.toFixed(1) + ' | Actual: ' + hco3;
  if      (Math.abs(hco3 - expHCO3acute) <= 2) compText += ' → <span style="color:var(--accent)">Acute</span>';
  else if (Math.abs(hco3 - expHCO3chron) <= 3) compText += ' → <span style="color:#10b981">Chronic</span>';
  else                                           compText += ' → Mixed disorder likely';
 }
 if (compText) steps.push('<b>Step 3 — Compensation:</b> ' + compText);

 // Step 4: Anion Gap
 const ag = na - (cl + hco3);
 const agNormal = ag >= 8 && ag <= 12;
 let agText = 'AG = ' + ag.toFixed(1) + ' mEq/L → ';
 if      (ag > 12) agText += '<span style="color:#ef4444">HIGH AG (' + ag.toFixed(1) + ') — MUDPILES</span>';
 else if (ag < 8)  agText += '<span style="color:#f59e0b">LOW AG — hypoalbuminaemia / myeloma / Li toxicity</span>';
 else              agText += '<span style="color:#10b981">Normal (8–12)</span>';
 steps.push('<b>Step 4 — Anion Gap:</b> ' + agText);

 // Step 5: Delta ratio (if high AG metabolic acidosis)
 if (ag > 12 && disorder === 'Metabolic Acidosis') {
  const delta = (ag - 12) / (24 - hco3);
  let deltaInterp;
  if      (delta < 0.4) deltaInterp = '<span style="color:#f59e0b">Pure NAGMA (concurrent)</span>';
  else if (delta < 0.8) deltaInterp = '<span style="color:#f97316">Mixed HAGMA + NAGMA</span>';
  else if (delta <= 2)  deltaInterp = '<span style="color:#10b981">Pure HAGMA</span>';
  else                  deltaInterp = '<span style="color:var(--accent)">HAGMA + concurrent Metabolic Alkalosis</span>';
  steps.push('<b>Step 5 — Delta Ratio:</b> Δ = ' + delta.toFixed(2) + ' → ' + deltaInterp);
 }

 // Oxygenation
 let o2text = pao2 + ' mmHg → ';
 if      (pao2 < 60)  o2text += '<span style="color:#ef4444">Hypoxaemic respiratory failure</span>';
 else if (pao2 < 80)  o2text += '<span style="color:#f59e0b">Hypoxaemia</span>';
 else if (pao2 <= 100) o2text += '<span style="color:#10b981">Normal</span>';
 else                  o2text += '<span style="color:var(--accent)">Hyperoxia — consider reducing FiO₂</span>';
 steps.push('<b>Oxygenation:</b> PaO₂ ' + o2text);

 primaryEl.style.color = primaryColor;
 primaryEl.innerHTML = disorder === 'Normal ABG' ? '✅ Normal ABG' : '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> ' + disorder;
 stepsEl.innerHTML = steps.join('<br>');
 if (boxEl) boxEl.style.borderColor = primaryColor + '60';

 // Critical alert
 const criticals = [];
 if (ph < 7.20)   criticals.push('🚨 pH &lt;7.20 — SEVERE ACIDOSIS');
 if (ph > 7.60)   criticals.push('🚨 pH &gt;7.60 — SEVERE ALKALOSIS');
 if (pco2 > 60)   criticals.push('🚨 PaCO₂ &gt;60 — Consider intubation');
 if (pao2 < 60)   criticals.push('🚨 PaO₂ &lt;60 — Hypoxaemic failure');
 if (hco3 < 10)   criticals.push('🚨 HCO₃ &lt;10 — Severe metabolic acidosis');
 if (critEl) {
  if (criticals.length > 0) { critEl.innerHTML = criticals.join('<br>'); critEl.style.display = 'block'; }
  else { critEl.style.display = 'none'; }
 }

 // ── Derived value boxes ──
 // Expected PaCO2 (Winter's formula) — classic metabolic-acidosis compensation check
 const expEl = document.getElementById('abg-exp-pco2');
 const expNoteEl = document.getElementById('abg-exp-pco2-note');
 if (expEl && expNoteEl) {
  const wLo = 1.5 * hco3 + 8 - 2;
  const wHi = 1.5 * hco3 + 8 + 2;
  expEl.textContent = wLo.toFixed(1) + '–' + wHi.toFixed(1);
  if (disorder === 'Metabolic Acidosis') {
   if      (pco2 < wLo) { expEl.style.color = '#f59e0b'; expNoteEl.innerHTML = 'Actual ' + pco2 + ' → <span style="color:#f59e0b">+ Resp. Alkalosis</span>'; }
   else if (pco2 > wHi) { expEl.style.color = '#ef4444'; expNoteEl.innerHTML = 'Actual ' + pco2 + ' → <span style="color:#ef4444">+ Resp. Acidosis</span>'; }
   else                  { expEl.style.color = '#10b981'; expNoteEl.innerHTML = 'Actual ' + pco2 + ' → <span style="color:#10b981">Adequate compensation</span>'; }
  } else {
   expEl.style.color = 'var(--text)';
   expNoteEl.textContent = "Winter's formula (met. acidosis)";
  }
 }

 // P/F Ratio — needs the FiO2 the patient's on
 const fio2El = document.getElementById('abg-fio2');
 const pfEl = document.getElementById('abg-pf-ratio');
 const pfNoteEl = document.getElementById('abg-pf-note');
 if (pfEl && pfNoteEl) {
  const fio2 = parseFloat(fio2El ? fio2El.value : 21) || 21;
  const pf = pao2 / (fio2 / 100);
  pfEl.textContent = pf.toFixed(0);
  if      (pf < 100) { pfEl.style.color = '#ef4444'; pfNoteEl.innerHTML = '<span style="color:#ef4444">Severe ARDS</span>'; }
  else if (pf < 200) { pfEl.style.color = '#f59e0b'; pfNoteEl.innerHTML = '<span style="color:#f59e0b">Moderate ARDS</span>'; }
  else if (pf < 300) { pfEl.style.color = '#f97316'; pfNoteEl.innerHTML = '<span style="color:#f97316">Mild ARDS</span>'; }
  else                { pfEl.style.color = '#10b981'; pfNoteEl.innerHTML = '<span style="color:#10b981">Normal</span>'; }
 }

 // Anion Gap — mirrors Step 4 above, shown as a standalone quick value
 const agEl = document.getElementById('abg-ag-value');
 const agNoteEl = document.getElementById('abg-ag-note');
 if (agEl && agNoteEl) {
  agEl.textContent = ag.toFixed(1);
  if      (ag > 12) { agEl.style.color = '#ef4444'; agNoteEl.innerHTML = '<span style="color:#ef4444">High — MUDPILES</span>'; }
  else if (ag < 8)  { agEl.style.color = '#f59e0b'; agNoteEl.innerHTML = '<span style="color:#f59e0b">Low</span>'; }
  else               { agEl.style.color = '#10b981'; agNoteEl.innerHTML = '<span style="color:#10b981">Normal (8–12)</span>'; }
 }

 // Delta-Delta Ratio — only meaningful with a raised anion gap
 const deltaEl = document.getElementById('abg-delta-value');
 const deltaNoteEl = document.getElementById('abg-delta-note');
 if (deltaEl && deltaNoteEl) {
  if (ag > 12 && hco3 !== 24) {
   const dd = (ag - 12) / (24 - hco3);
   deltaEl.textContent = dd.toFixed(2);
   if      (dd < 0.4) { deltaEl.style.color = '#f59e0b'; deltaNoteEl.innerHTML = '<span style="color:#f59e0b">Pure NAGMA (concurrent)</span>'; }
   else if (dd < 0.8) { deltaEl.style.color = '#f97316'; deltaNoteEl.innerHTML = '<span style="color:#f97316">Mixed HAGMA + NAGMA</span>'; }
   else if (dd <= 2)  { deltaEl.style.color = '#10b981'; deltaNoteEl.innerHTML = '<span style="color:#10b981">Pure HAGMA</span>'; }
   else                { deltaEl.style.color = '#06b6d4'; deltaNoteEl.innerHTML = '<span style="color:#06b6d4">HAGMA + met. alkalosis</span>'; }
  } else {
   deltaEl.textContent = '—';
   deltaEl.style.color = 'var(--text)';
   deltaNoteEl.textContent = 'Needs AG >12';
  }
 }
}

// ─── Ventilator Calculator ───
function vcSetBadge(el, state, text) {
  if (!el) return;
  el.className = 'vc-badge ' + state;
  el.textContent = text;
}

function vcCalcDP() {
  var pplat = parseFloat(document.getElementById('vc-dp-pplat').value);
  var peep  = parseFloat(document.getElementById('vc-dp-peep').value);
  var box   = document.getElementById('vc-dp-result');
  var val   = document.getElementById('vc-dp-value');
  var badge = document.getElementById('vc-dp-badge');
  if (isNaN(pplat) || isNaN(peep)) {
    box.className = 'vc-result';
    val.textContent = '—';
    vcSetBadge(badge, 'none', '');
    return;
  }
  var dp = pplat - peep;
  val.textContent = dp.toFixed(1);
  if (dp < 15) {
    box.className = 'vc-result safe';
    vcSetBadge(badge, 'safe', 'WITHIN TARGET (<15)');
  } else {
    box.className = 'vc-result danger';
    vcSetBadge(badge, 'danger', 'ABOVE TARGET — REASSESS');
  }
}

function vcCalcComp() {
  var vt    = parseFloat(document.getElementById('vc-comp-vt').value);
  var ppeak = parseFloat(document.getElementById('vc-comp-ppeak').value);
  var pplat = parseFloat(document.getElementById('vc-comp-pplat').value);
  var peep  = parseFloat(document.getElementById('vc-comp-peep').value);
  var flow  = parseFloat(document.getElementById('vc-comp-flow').value);
  var box   = document.getElementById('vc-comp-result');
  var cstatEl = document.getElementById('vc-comp-cstat');
  var cdynEl  = document.getElementById('vc-comp-cdyn');
  var rawEl   = document.getElementById('vc-comp-raw');
  var interpEl = document.getElementById('vc-comp-interp');
  if (isNaN(vt) || isNaN(ppeak) || isNaN(pplat) || isNaN(peep) || isNaN(flow) || (pplat - peep) === 0 || (ppeak - peep) === 0 || flow === 0) {
    box.className = 'vc-result';
    cstatEl.textContent = '—'; cdynEl.textContent = '—'; rawEl.textContent = '—';
    interpEl.textContent = '';
    return;
  }
  var cstat = vt / (pplat - peep);
  var cdyn  = vt / (ppeak - peep);
  var raw   = (ppeak - pplat) / (flow / 60);
  cstatEl.textContent = cstat.toFixed(1);
  cdynEl.textContent  = cdyn.toFixed(1);
  rawEl.textContent   = raw.toFixed(1);

  var msgs = [];
  var severe = false;
  if (cstat < 50) { msgs.push('Static compliance is low — consider pneumothorax, worsening ARDS, chest wall/abdominal restriction.'); severe = true; }
  else if (cstat > 100) { msgs.push('Static compliance is unusually high — recheck values / consider circuit leak.'); }
  if (raw > 20) { msgs.push('Airway resistance is significantly elevated — consider secretions, bronchospasm, or a kinked/obstructed ETT.'); severe = true; }
  else if (raw > 10) { msgs.push('Airway resistance is mildly elevated — consider secretions or bronchospasm.'); }
  if (!msgs.length) msgs.push('Compliance and resistance are within an acceptable range.');
  interpEl.innerHTML = msgs.join('<br>');
  box.className = 'vc-result' + (severe ? ' danger' : (msgs.length && !severe && (cstat < 50 || cstat > 100 || raw > 10) ? ' caution' : ' safe'));
}

function vcCalcRSBI() {
  var rr = parseFloat(document.getElementById('vc-rsbi-rr').value);
  var vt = parseFloat(document.getElementById('vc-rsbi-vt').value);
  var box = document.getElementById('vc-rsbi-result');
  var val = document.getElementById('vc-rsbi-value');
  var badge = document.getElementById('vc-rsbi-badge');
  if (isNaN(rr) || isNaN(vt) || vt === 0) {
    box.className = 'vc-result';
    val.textContent = '—';
    vcSetBadge(badge, 'none', '');
    return;
  }
  var rsbi = rr / (vt / 1000);
  val.textContent = rsbi.toFixed(0);
  if (rsbi < 105) {
    box.className = 'vc-result safe';
    vcSetBadge(badge, 'safe', 'FAVORS WEANING SUCCESS');
  } else {
    box.className = 'vc-result danger';
    vcSetBadge(badge, 'danger', 'RSBI ≥105 — WEANING UNLIKELY TO SUCCEED');
  }
}

function vcCalcOI() {
  var fio2 = parseFloat(document.getElementById('vc-oi-fio2').value);
  var map  = parseFloat(document.getElementById('vc-oi-map').value);
  var pao2 = parseFloat(document.getElementById('vc-oi-pao2').value);
  var box  = document.getElementById('vc-oi-result');
  var val  = document.getElementById('vc-oi-value');
  var badge = document.getElementById('vc-oi-badge');
  if (isNaN(fio2) || isNaN(map) || isNaN(pao2) || pao2 === 0) {
    box.className = 'vc-result';
    val.textContent = '—';
    vcSetBadge(badge, 'none', '');
    return;
  }
  var oi = ((fio2 / 100) * map * 100) / pao2;
  val.textContent = oi.toFixed(1);
  if (oi < 4) {
    box.className = 'vc-result safe';
    vcSetBadge(badge, 'safe', 'NORMAL');
  } else if (oi < 8) {
    box.className = 'vc-result caution';
    vcSetBadge(badge, 'caution', 'MILD HYPOXAEMIC RESPIRATORY FAILURE');
  } else if (oi < 16) {
    box.className = 'vc-result caution';
    vcSetBadge(badge, 'caution', 'MODERATE');
  } else if (oi < 25) {
    box.className = 'vc-result danger';
    vcSetBadge(badge, 'danger', 'SEVERE');
  } else {
    box.className = 'vc-result danger';
    vcSetBadge(badge, 'danger', 'SEVERE — CONSIDER ECMO REFERRAL PER PROTOCOL');
  }
}

var vcPeepTables = {
  low: [
    [0.3,'5'], [0.4,'5'], [0.4,'8'], [0.5,'8'], [0.5,'10'], [0.6,'10'], [0.7,'10'],
    [0.7,'12'], [0.7,'14'], [0.8,'14'], [0.9,'14'], [0.9,'16'], [0.9,'18'], [1.0,'18\u201324']
  ],
  high: [
    [0.3,'5'], [0.3,'8'], [0.3,'10'], [0.3,'12'], [0.3,'14'], [0.4,'14'], [0.4,'16'],
    [0.5,'16'], [0.5,'18'], ['0.5\u20130.8','20'], [0.8,'22'], [0.9,'22'], [1.0,'22'], [1.0,'24']
  ]
};
var vcPeepStrat = 'low';
function vcPeepStrategy(s) {
  vcPeepStrat = s;
  var lowBtn = document.getElementById('vc-peep-strat-low');
  var highBtn = document.getElementById('vc-peep-strat-high');
  if (lowBtn) lowBtn.classList.toggle('active', s === 'low');
  if (highBtn) highBtn.classList.toggle('active', s === 'high');
  vcRenderPeepTable();
}
function vcFio2Matches(entryFio2, selected) {
  if (typeof entryFio2 === 'number') return Math.abs(entryFio2 - selected) < 0.001;
  var parts = String(entryFio2).split('\u2013').map(function (p) { return parseFloat(p); });
  return selected >= parts[0] - 0.001 && selected <= parts[1] + 0.001;
}
// ─── Custom centered FiO2 picker (replaces native <select>) ───
var vcPeepFio2Options = ['0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'];
var vcPeepFio2Val = '0.6';
function vcPeepDDOpen() {
  var panel = document.getElementById('vc-peep-dd-panel');
  if (!panel) return;
  panel.innerHTML = vcPeepFio2Options.map(function (v) {
    return '<div class="vc-peep-dd-option' + (v === vcPeepFio2Val ? ' active' : '') + '" onclick="vcPeepDDSelect(\'' + v + '\')">' + v + '</div>';
  }).join('');
  document.getElementById('vc-peep-dd-overlay').classList.add('open');
}
function vcPeepDDClose(e) {
  if (e && e.target && e.target.id !== 'vc-peep-dd-overlay') return;
  document.getElementById('vc-peep-dd-overlay').classList.remove('open');
}
function vcPeepDDSelect(v) {
  vcPeepFio2Val = v;
  document.getElementById('vc-peep-fio2-label').textContent = v;
  document.getElementById('vc-peep-dd-overlay').classList.remove('open');
  vcRenderPeepTable();
}
function vcRenderPeepTable() {
  var tableEl = document.getElementById('vc-peep-table');
  if (!tableEl) return;
  var sel = parseFloat(vcPeepFio2Val);
  var rows = vcPeepTables[vcPeepStrat];
  var fio2Row = '<tr><th style="text-align:left">FiO₂</th>';
  var peepRow = '<tr><th style="text-align:left">PEEP</th>';
  rows.forEach(function (r) {
    var match = vcFio2Matches(r[0], sel);
    var fio2Label = typeof r[0] === 'number' ? r[0].toFixed(1) : r[0];
    fio2Row += '<td' + (match ? ' class="hl"' : '') + '>' + fio2Label + '</td>';
    peepRow += '<td' + (match ? ' class="hl"' : '') + '>' + r[1] + '</td>';
  });
  fio2Row += '</tr>';
  peepRow += '</tr>';
  tableEl.innerHTML = fio2Row + peepRow;
}

function vcMatchCompWidth() {
  var label = document.querySelector('label[for="vc-rc-comp"]');
  var input = document.getElementById('vc-rc-comp');
  if (!label || !input) return;
  var prevDisplay = label.style.display;
  label.style.display = 'inline-block';
  var w = label.scrollWidth;
  label.style.display = prevDisplay;
  if (w > 0) input.style.width = w + 'px';
}

function vcCalcRC() {
  var comp = parseFloat(document.getElementById('vc-rc-comp').value);
  var res  = parseFloat(document.getElementById('vc-rc-res').value);
  var expT = parseFloat(document.getElementById('vc-rc-exptime').value);
  var box  = document.getElementById('vc-rc-result');
  var rcEl = document.getElementById('vc-rc-value');
  var rc3El = document.getElementById('vc-rc-3rc');
  var badge = document.getElementById('vc-rc-badge');
  if (isNaN(comp) || isNaN(res)) {
    box.className = 'vc-result';
    rcEl.textContent = '—'; rc3El.textContent = '—';
    vcSetBadge(badge, 'none', '');
    return;
  }
  var rc = (comp / 1000) * res;
  var rc3 = rc * 3;
  rcEl.textContent = rc.toFixed(2);
  rc3El.textContent = rc3.toFixed(2);
  if (isNaN(expT)) {
    box.className = 'vc-result';
    vcSetBadge(badge, 'none', 'ENTER EXPIRATORY TIME TO ASSESS AUTO-PEEP RISK');
    return;
  }
  if (expT < rc3) {
    box.className = 'vc-result danger';
    vcSetBadge(badge, 'danger', 'EXPIRATORY TIME MAY BE INSUFFICIENT — AUTO-PEEP RISK');
  } else {
    box.className = 'vc-result safe';
    vcSetBadge(badge, 'safe', 'EXPIRATORY TIME ADEQUATE (≥3×RC)');
  }
}

vcRenderPeepTable();

// ─── CBC Sex Toggle ───
let cbcSex = 'male';
function setCBCSex(sex) {
 cbcSex = sex;
 document.getElementById('cbc-sex-male').style.background   = sex === 'male'   ? '#ef444422' : 'transparent';
 document.getElementById('cbc-sex-male').style.borderColor  = sex === 'male'   ? '#ef4444'   : 'var(--border-strong)';
 document.getElementById('cbc-sex-male').style.color        = sex === 'male'   ? '#ef4444'   : 'var(--text-faint)';
 document.getElementById('cbc-sex-female').style.background = sex === 'female' ? '#ef444422' : 'transparent';
 document.getElementById('cbc-sex-female').style.borderColor= sex === 'female' ? '#ef4444'   : 'var(--border-strong)';
 document.getElementById('cbc-sex-female').style.color      = sex === 'female' ? '#ef4444'   : 'var(--text-faint)';
 calcCBC();
}

// ─── CBC Calculator ───
function calcCBC() {
 const hb    = parseFloat(document.getElementById('cbc-hb')   ?.value) || 0;
 const hct   = parseFloat(document.getElementById('cbc-hct')  ?.value) || 0;
 const wbc   = parseFloat(document.getElementById('cbc-wbc')  ?.value) || 0;
 const plt   = parseFloat(document.getElementById('cbc-plt')  ?.value) || 0;
 const mcv   = parseFloat(document.getElementById('cbc-mcv')  ?.value) || 0;
 const mch   = parseFloat(document.getElementById('cbc-mch')  ?.value) || 0;
 const neutP = parseFloat(document.getElementById('cbc-neut') ?.value) || 0;
 const lymphP= parseFloat(document.getElementById('cbc-lymph')?.value) || 0;

 const summaryEl  = document.getElementById('cbc-summary');
 const findingsEl = document.getElementById('cbc-findings');
 const critBox    = document.getElementById('cbc-critical-box');
 const critList   = document.getElementById('cbc-critical-list');
 const ancEl      = document.getElementById('cbc-anc-val');
 const alcEl      = document.getElementById('cbc-alc-val');
 const nlrEl      = document.getElementById('cbc-nlr-val');
 const resultBox  = document.getElementById('cbc-result-box');
 if (!summaryEl) return;

 // ── Derived indices
 const anc = parseFloat((wbc * neutP / 100).toFixed(2));
 const alc = parseFloat((wbc * lymphP / 100).toFixed(2));
 const nlr = lymphP > 0 ? parseFloat((neutP / lymphP).toFixed(1)) : 0;

 if (ancEl) { ancEl.textContent = anc.toFixed(2); ancEl.style.color = anc < 0.5 ? '#ef4444' : anc < 1.5 ? '#f59e0b' : '#f59e0b'; }
 if (alcEl) { alcEl.textContent = alc.toFixed(2); alcEl.style.color = alc < 1.0 ? '#ef4444' : '#10b981'; }
 if (nlrEl) { nlrEl.textContent = nlr.toFixed(1); nlrEl.style.color = nlr > 9 ? '#ef4444' : nlr > 3.5 ? '#58a6ff' : 'var(--accent)'; }

 // ── Reference ranges (sex-dependent)
 const hbLo  = cbcSex === 'male' ? 13.5 : 12.0;
 const hbHi  = cbcSex === 'male' ? 17.5 : 16.0;
 const hctLo = cbcSex === 'male' ? 41   : 36;
 const hctHi = cbcSex === 'male' ? 53   : 46;

 // ── Findings list
 const findings = [];
 let criticals  = [];
 let hasAbnormal = false;

 // — Haemoglobin
 if (hb > 0) {
  if      (hb < 6)    { findings.push('<span style="color:#ef4444">🔴 Hb ' + hb + ' g/dL — Very Severe Anaemia (&lt;6)</span>'); hasAbnormal = true; }
  else if (hb < 8)    { findings.push('<span style="color:#ef4444">🔴 Hb ' + hb + ' g/dL — Severe Anaemia (6–7.9)</span>'); hasAbnormal = true; }
  else if (hb < 10)   { findings.push('<span style="color:#f59e0b">🟡 Hb ' + hb + ' g/dL — Moderate Anaemia (8–9.9)</span>'); hasAbnormal = true; }
  else if (hb < hbLo) { findings.push('<span style="color:#f59e0b">🟡 Hb ' + hb + ' g/dL — Mild Anaemia</span>'); hasAbnormal = true; }
  else if (hb > hbHi) { findings.push('<span style="color:#f59e0b">🟡 Hb ' + hb + ' g/dL — Polycythaemia / Haemoconcentration</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ Hb ' + hb + ' g/dL — Normal</span>'); }
 }

 // — Haematocrit
 if (hct > 0) {
  if      (hct < hctLo) { findings.push('<span style="color:' + (hct < 25 ? '#ef4444' : '#f59e0b') + '">' + (hct < 25 ? '🔴' : '🟡') + ' Hct ' + hct + '% — Low</span>'); if (hct >= hctLo - 1) {} }
  else if (hct > hctHi) { findings.push('<span style="color:#f59e0b">🟡 Hct ' + hct + '% — Elevated (dehydration / polycythaemia)</span>'); hasAbnormal = true; }
  else                   { findings.push('<span style="color:#10b981">✅ Hct ' + hct + '% — Normal</span>'); }
 }

 // — WBC
 if (wbc > 0) {
  if      (wbc < 2)   { findings.push('<span style="color:#ef4444">🔴 WBC ' + wbc + ' — Severe Leucopenia (&lt;2)</span>'); hasAbnormal = true; }
  else if (wbc < 4.5) { findings.push('<span style="color:#f59e0b">🟡 WBC ' + wbc + ' — Leucopenia (4.5–11 normal)</span>'); hasAbnormal = true; }
  else if (wbc > 30)  { findings.push('<span style="color:#ef4444">🔴 WBC ' + wbc + ' — Marked Leucocytosis → exclude leukaemia / sepsis</span>'); hasAbnormal = true; }
  else if (wbc > 11)  { findings.push('<span style="color:#f59e0b">🟡 WBC ' + wbc + ' — Leucocytosis (infection / inflammation / stress)</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ WBC ' + wbc + ' — Normal</span>'); }
 }

 // — ANC (Absolute Neutrophil Count)
 if (wbc > 0 && neutP > 0) {
  if      (anc < 0.5) { findings.push('<span style="color:#ef4444">🔴 ANC ' + anc + ' — Severe Neutropenia (infection risk!) → reverse isolation</span>'); hasAbnormal = true; }
  else if (anc < 1.0) { findings.push('<span style="color:#ef4444">🔴 ANC ' + anc + ' — Moderate Neutropenia (1.0–1.5 mild)</span>'); hasAbnormal = true; }
  else if (anc < 1.5) { findings.push('<span style="color:#f59e0b">🟡 ANC ' + anc + ' — Mild Neutropenia (&lt;1.5)</span>'); hasAbnormal = true; }
  else if (anc > 8)   { findings.push('<span style="color:#f59e0b">🟡 ANC ' + anc + ' — Neutrophilia (sepsis / steroids / stress)</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ ANC ' + anc + ' — Normal</span>'); }
 }

 // — Platelets
 if (plt > 0) {
  if      (plt < 10)  { findings.push('<span style="color:#ef4444">🔴 PLT ' + plt + 'K — CRITICAL: spontaneous bleeding risk → transfuse immediately</span>'); hasAbnormal = true; }
  else if (plt < 20)  { findings.push('<span style="color:#ef4444">🔴 PLT ' + plt + 'K — Severe Thrombocytopenia → transfuse threshold</span>'); hasAbnormal = true; }
  else if (plt < 50)  { findings.push('<span style="color:#ef4444">🔴 PLT ' + plt + 'K — Moderate Thrombocytopenia → avoid invasive procedures</span>'); hasAbnormal = true; }
  else if (plt < 100) { findings.push('<span style="color:#f59e0b">🟡 PLT ' + plt + 'K — Mild Thrombocytopenia</span>'); hasAbnormal = true; }
  else if (plt > 600) { findings.push('<span style="color:#f59e0b">🟡 PLT ' + plt + 'K — Thrombocytosis → reactive or essential</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ PLT ' + plt + 'K — Normal</span>'); }
 }

 // — MCV (anaemia classification)
 if (mcv > 0 && hb > 0 && hb < (cbcSex === 'male' ? 13.5 : 12.0)) {
  if      (mcv < 80) findings.push('<span style="color:var(--accent)">🔵 MCV ' + mcv + ' fL — Microcytic anaemia → Fe deficiency / thalassaemia / chronic disease</span>');
  else if (mcv > 100) findings.push('<span style="color:var(--accent)">🟣 MCV ' + mcv + ' fL — Macrocytic anaemia → B12/folate deficiency / liver disease / hypothyroid</span>');
  else                findings.push('<span style="color:var(--accent)">🔵 MCV ' + mcv + ' fL — Normocytic anaemia → acute blood loss / haemolysis / CKD / mixed</span>');
 } else if (mcv > 0) {
  if      (mcv < 80)  { findings.push('<span style="color:#f59e0b">🟡 MCV ' + mcv + ' fL — Microcytosis</span>'); hasAbnormal = true; }
  else if (mcv > 100) { findings.push('<span style="color:#f59e0b">🟡 MCV ' + mcv + ' fL — Macrocytosis</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ MCV ' + mcv + ' fL — Normal</span>'); }
 }

 // — MCH
 if (mch > 0) {
  if      (mch < 27)  { findings.push('<span style="color:var(--accent)">🔵 MCH ' + mch + ' pg — Hypochromic (Fe def / thalassaemia)</span>'); hasAbnormal = true; }
  else if (mch > 33)  { findings.push('<span style="color:var(--accent)">🟣 MCH ' + mch + ' pg — Hyperchromic (B12/folate def)</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ MCH ' + mch + ' pg — Normal</span>'); }
 }

 // — N:L Ratio
 if (wbc > 0 && neutP > 0 && lymphP > 0) {
  if      (nlr > 9)   { findings.push('<span style="color:#ef4444">🔴 N:L Ratio ' + nlr + ' — Severe inflammation / sepsis / poor prognosis</span>'); hasAbnormal = true; }
  else if (nlr > 3.5) { findings.push('<span style="color:#f59e0b">🟡 N:L Ratio ' + nlr + ' — Elevated (infection / inflammation / stress)</span>'); hasAbnormal = true; }
  else if (nlr < 1)   { findings.push('<span style="color:var(--accent)">🔵 N:L Ratio ' + nlr + ' — Low (viral illness / lymphocytosis)</span>'); hasAbnormal = true; }
  else                 { findings.push('<span style="color:#10b981">✅ N:L Ratio ' + nlr + ' — Normal</span>'); }
 }

 // — Pancytopenia check
 const hbLow  = hb   > 0 && hb   < 10;
 const wbcLow = wbc  > 0 && wbc  < 4;
 const pltLow = plt  > 0 && plt  < 150;
 if (hbLow && wbcLow && pltLow) {
  findings.push('<span style="color:#ef4444"><span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> <strong>PANCYTOPENIA</strong> — Consider aplastic anaemia, MDS, leukaemia, bone marrow infiltration. Urgent haematology referral.</span>');
  hasAbnormal = true;
 }

 // — Transfusion guidance
 if (hb > 0 && hb < 10) {
  let txTxt = '';
  if (hb < 7) txTxt = '🩸 Transfusion indicated (Hb &lt;7 stable ICU patient)';
  else if (hb < 8) txTxt = '🩸 Consider transfusion if ACS, post-cardiac surgery (target Hb &lt;8)';
  else txTxt = '🩸 Transfusion generally not indicated unless symptomatic / haemodynamically unstable';
  findings.push('<span style="color:#f97316">' + txTxt + '</span>');
 }
 if (plt > 0 && plt < 50) {
  findings.push('<span style="color:#f97316">🩸 Platelet transfusion needed for any invasive procedure (PLT &lt;50K)</span>');
 }

 // ── Critical values
 if (hb   > 0 && hb   < 6)   criticals.push('Hb &lt;6 g/dL — Life-threatening anaemia');
 if (wbc  > 0 && wbc  < 2)   criticals.push('WBC &lt;2K — Severe leucopenia → reverse isolation');
 if (wbc  > 0 && wbc  > 30)  criticals.push('WBC &gt;30K — Consider haematological malignancy');
 if (plt  > 0 && plt  < 20)  criticals.push('PLT &lt;20K — Spontaneous bleeding risk → transfuse');
 if (anc > 0 && anc  < 0.5)  criticals.push('ANC &lt;0.5 — Severe neutropenia → prophylactic antibiotics');

 // ── Render
 const overallColor = criticals.length > 0 ? '#ef4444' : hasAbnormal ? '#f59e0b' : '#10b981';
 const overallLabel = criticals.length > 0 ? '🚨 CRITICAL VALUES DETECTED' : hasAbnormal ? '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> ABNORMAL — Review Required' : '✅ CBC Within Normal Limits';

 summaryEl.innerHTML = overallLabel;
 summaryEl.style.color = overallColor;
 findingsEl.innerHTML  = findings.join('<br>');
 if (resultBox) resultBox.style.borderColor = overallColor + '50';

 if (critBox && critList) {
  if (criticals.length > 0) {
   critList.innerHTML = criticals.map(c => '🚨 ' + c).join('<br>');
   critBox.style.display = 'block';
  } else {
   critBox.style.display = 'none';
  }
 }
}


// ─────────────────────── ICU UNIT CONVERTER ───────────────────────
/* ── At a Glance: Cheatsheets — sub-card collapse + internal tabs ── */
function glToggle(key) {
 const body = document.getElementById('gls-' + key + '-body');
 const chevron = document.getElementById('gls-' + key + '-chevron');
 if (!body) return;
 const isOpen = body.classList.contains('gl-open');
 body.classList.toggle('gl-open', !isOpen);
 if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(0deg)';
}

function glTab(scope, name, btn) {
 const body = document.getElementById('gls-' + scope + '-body');
 if (!body) return;
 body.querySelectorAll('.gl-tab').forEach(function (t) { t.classList.remove('gl-active'); });
 body.querySelectorAll('.gl-panel').forEach(function (p) { p.classList.remove('gl-active'); });
 if (btn) btn.classList.add('gl-active');
 const panel = document.getElementById('gl-' + scope + '-' + name);
 if (panel) panel.classList.add('gl-active');
}

/* ── At a Glance: Status Epilepticus — weight-based dose calc ── */
function updateSEDoses() {
 const w = getWt();
 const specs = [
  ['se-lora-d', 0.1, 4, ' mg'],
  ['se-diaz-d', 0.175, 10, ' mg'],
  ['se-pht-d', 20, null, ' mg total'],
  ['se-vpa-d', 40, null, ' mg total'],
  ['se-lev-d', 60, 4500, ' mg total'],
  ['se-pb-d', 15, null, ' mg total']
 ];
 specs.forEach(function (s) {
  const el = document.getElementById(s[0]);
  if (!el) return;
  let dose = w * s[1];
  let capped = false;
  if (s[2] && dose > s[2]) { dose = s[2]; capped = true; }
  el.textContent = '→ ' + dose.toFixed(dose < 10 ? 1 : 0) + s[3] + (capped ? ' (capped)' : '');
 });
}

/* ── CBC Interpretation: Haematology at a Glance (Blood Picture vs Bone Marrow) ── */
const HG_CATS = [
 { key: 'anaemia', label: 'Anaemia' },
 { key: 'leukemia', label: 'Leukaemia' },
 { key: 'other', label: 'Other' }
];
const HG_CONDITIONS = [
 { id: 'ida', full: 'Iron Deficiency Anaemia', cat: 'anaemia' },
 { id: 'thal', full: 'Thalassaemia', cat: 'anaemia' },
 { id: 'aplastic', full: 'Aplastic Anaemia', cat: 'anaemia' },
 { id: 'sca', full: 'Sickle Cell Anaemia', cat: 'anaemia' },
 { id: 'mega', full: 'Megaloblastic Anaemia', cat: 'anaemia' },
 { id: 'haem', full: 'Haemolytic Anaemia', cat: 'anaemia' },
 { id: 'sub', full: 'Subleukaemic Acute Leukaemia', cat: 'leukemia' },
 { id: 'all', full: 'Acute Lymphoblastic Leukaemia', cat: 'leukemia' },
 { id: 'aml', full: 'Acute Myeloid Leukaemia', cat: 'leukemia' },
 { id: 'cml', full: 'Chronic Myeloid Leukaemia', cat: 'leukemia' },
 { id: 'myeloma', full: 'Multiple Myeloma', cat: 'other' },
 { id: 'itp', full: 'Immune Thrombocytopenic Purpura', cat: 'other' }
];
const HG_BPROWS = [
 { label: 'WBC', tip: 'White blood cell count and differential.', values: { ida: 'Normal', thal: 'Normal', aplastic: 'Low', sca: 'Normal or high', mega: 'Normal', haem: 'Normal or high', sub: 'Variable', all: 'Blast cells may be present', aml: 'Blast cells may be present', cml: 'Marked leukocytosis with left shift', myeloma: 'Normal or low', itp: 'Normal' } },
 { label: 'Haemoglobin', tip: 'Primary indicator of anaemia.', values: { ida: 'Low', thal: 'Low', aplastic: 'Low', sca: 'Low', mega: 'Low', haem: 'Low', sub: 'Low', all: 'Low', aml: 'Low', cml: 'Low', myeloma: 'Low', itp: 'Normal' } },
 { label: 'Platelet', tip: 'Platelet count.', values: { ida: 'Normal', thal: 'Normal', aplastic: 'Low', sca: 'Normal', mega: 'Low or normal', haem: 'Normal', sub: 'Low', all: 'Low', aml: 'Low', cml: 'Normal or high', myeloma: 'Normal or low', itp: 'Low' } },
 { label: 'MCV', tip: 'Mean corpuscular volume.', values: { ida: 'Low', thal: 'Low', aplastic: 'Normal', sca: 'Normal', mega: 'High', haem: 'Normal', sub: 'Normal', all: 'Normal', aml: 'Normal', cml: 'Normal', myeloma: 'Normal', itp: 'Normal' } },
 { label: 'MCH', tip: 'Mean corpuscular haemoglobin.', values: { ida: 'Low', thal: 'Low', aplastic: 'Normal', sca: 'Normal', mega: 'Low or normal', haem: 'Normal', sub: 'Normal', all: 'Normal', aml: 'Normal', cml: 'Normal', myeloma: 'Normal', itp: 'Normal' } },
 { label: 'MCHC', tip: 'Mean corpuscular haemoglobin concentration.', values: { ida: 'Low', thal: 'Low or normal', aplastic: 'Normal', sca: 'Normal', mega: 'Normal', haem: 'Normal or low', sub: 'Normal', all: 'Normal', aml: 'Normal', cml: 'Normal', myeloma: 'Normal', itp: 'Normal' } },
 { label: 'PCV', tip: 'Packed cell volume / haematocrit.', values: { ida: 'Low', thal: 'Low', aplastic: 'Low', sca: 'Low', mega: 'Low', haem: 'Low', sub: 'Low', all: 'Low', aml: 'Low', cml: 'Low', myeloma: 'Low', itp: 'Normal' } },
 { label: 'RBC Morphology', tip: 'Peripheral blood film morphology.', values: { ida: 'Microcytic hypochromic, pencil cells', thal: 'Target cells, microcytosis, basophilic stippling', aplastic: 'Normocytic normochromic', sca: 'Sickle cells, target cells, polychromasia', mega: 'Macro-ovalocytes, hypersegmented neutrophils', haem: 'Spherocytes or fragmented cells, polychromasia', sub: 'Blast cells may be seen', all: 'Lymphoblasts', aml: 'Myeloblasts, Auer rods may be present', cml: 'Myeloid precursors with basophilia', myeloma: 'Rouleaux formation', itp: 'Usually normal' } },
 { label: 'Reticulocyte', tip: 'Immature RBCs.', values: { ida: 'Low or normal', thal: 'Increased', aplastic: 'Low', sca: 'Increased', mega: 'Low', haem: 'Increased', sub: 'Variable', all: 'Low or variable', aml: 'Variable', cml: 'Normal or increased', myeloma: 'Normal or low', itp: 'Normal' } },
 { label: 'ESR', tip: 'Erythrocyte sedimentation rate.', values: { ida: 'High or normal', thal: 'Normal', aplastic: 'Normal or high', sca: 'Normal', mega: 'High', haem: 'High', sub: 'High', all: 'High', aml: 'High', cml: 'High', myeloma: 'Very high', itp: 'Normal' } }
];
const HG_BMROWS = [
 { label: 'Cellularity', tip: 'Overall marrow cellularity.', values: { ida: 'Normal or high', thal: 'High', aplastic: 'Markedly low', sca: 'High', mega: 'High', haem: 'High', sub: 'High', all: 'Packed with blasts', aml: 'Packed with blasts', cml: 'Hypercellular', myeloma: 'Variable / increased plasma cells', itp: 'Normal' } },
 { label: 'M:E Ratio', tip: 'Myeloid to erythroid ratio.', values: { ida: 'Low', thal: 'Low', aplastic: 'Normal or high', sca: 'Low', mega: 'Low', haem: 'Low', sub: 'High', all: 'High', aml: 'High', cml: 'High', myeloma: 'Variable', itp: 'Normal' } },
 { label: 'Erythropoiesis', tip: 'Red cell precursor activity.', values: { ida: 'Increased', thal: 'Increased and ineffective', aplastic: 'Suppressed', sca: 'Increased', mega: 'Megaloblastic', haem: 'Increased', sub: 'Suppressed', all: 'Suppressed', aml: 'Suppressed', cml: 'Variable', myeloma: 'Suppressed', itp: 'Normal' } },
 { label: 'Granulopoiesis', tip: 'Granulocyte precursor activity.', values: { ida: 'Normal', thal: 'Normal', aplastic: 'Reduced', sca: 'Normal', mega: 'Normal or reduced', haem: 'Normal', sub: 'Increased', all: 'Suppressed', aml: 'Suppressed', cml: 'Increased', myeloma: 'Normal', itp: 'Normal' } },
 { label: 'Megakaryopoiesis', tip: 'Platelet precursor activity.', values: { ida: 'Normal', thal: 'Normal', aplastic: 'Reduced', sca: 'Normal', mega: 'Normal', haem: 'Normal', sub: 'Reduced', all: 'Reduced', aml: 'Reduced', cml: 'Normal or increased', myeloma: 'Variable', itp: 'Normal or increased' } },
 { label: 'Special Findings', tip: 'Diagnostic extras.', values: { ida: 'Absent marrow iron stores', thal: 'Erythroid hyperplasia with ineffective erythropoiesis', aplastic: 'Marked fatty replacement', sca: 'Sickled erythrocytes', mega: 'Megaloblasts and giant metamyelocytes', haem: 'Cause-dependent marrow changes', sub: 'Blast infiltration', all: 'TdT-positive lymphoblasts', aml: 'Myeloblasts with Auer rods or MPO positivity', cml: 'BCR::ABL-associated myeloid proliferation', myeloma: 'Clonal plasma cells with paraproteinaemia', itp: 'Increased megakaryocytes' } }
];
let hgView = 'bp', hgDisease = 'ida';

function hgValClass(v) {
 const s = (v || '').toLowerCase();
 if (s.includes('low') || s.includes('reduced') || s.includes('suppressed') || s.includes('absent') || s.includes('markedly low')) return 'hg-down';
 if (s.includes('high') || s.includes('increased') || s.includes('packed') || s.includes('hypercellular') || s.includes('blasts')) return 'hg-up';
 if (s.includes('normal') || s.includes('variable') || s.includes('cause-dependent')) return 'hg-normal';
 return 'hg-special';
}

function hgRenderDiseaseOptions() {
 const panel = document.getElementById('hg-dd-panel');
 const label = document.getElementById('hg-dd-label');
 if (!panel) return;
 let html = '';
 HG_CATS.forEach(function (cat) {
  const items = HG_CONDITIONS.filter(function (c) { return c.cat === cat.key; });
  if (!items.length) return;
  html += '<div class="hg-dd-group">' + cat.label + '</div>';
  items.forEach(function (c) {
   html += '<div class="hg-dd-option' + (c.id === hgDisease ? ' hg-dd-selected' : '') + '" onclick="hgSetDisease(\'' + c.id + '\')">' + c.full + '</div>';
  });
 });
 panel.innerHTML = html;
 const cur = HG_CONDITIONS.find(function (c) { return c.id === hgDisease; });
 if (label && cur) label.textContent = cur.full;
}

function hgRenderRows() {
 const wrap = document.getElementById('hg-rows');
 if (!wrap) return;
 const rows = hgView === 'bp' ? HG_BPROWS : HG_BMROWS;
 let html = '';
 rows.forEach(function (r) {
  const val = r.values[hgDisease] || 'N/A';
  html += '<div class="hg-row" title="' + r.tip.replace(/"/g, '&quot;') + '"><span class="hg-row-label">' + r.label + '</span><span class="hg-row-val ' + hgValClass(val) + '">' + val + '</span></div>';
 });
 wrap.innerHTML = html;
}

function hgSetDisease(id) {
 hgDisease = id;
 const wrap = document.getElementById('hg-dd-wrap');
 if (wrap) wrap.classList.remove('hg-dd-open');
 hgRenderDiseaseOptions();
 hgRenderRows();
}

function hgToggleDD() {
 document.querySelectorAll('.hg-dd.hg-dd-open').forEach(function (el) { if (el.id !== 'hg-dd-wrap') el.classList.remove('hg-dd-open'); });
 const wrap = document.getElementById('hg-dd-wrap');
 if (wrap) wrap.classList.toggle('hg-dd-open');
}

document.addEventListener('click', function (e) {
 const wrap = document.getElementById('hg-dd-wrap');
 if (wrap && wrap.classList.contains('hg-dd-open') && !wrap.contains(e.target)) wrap.classList.remove('hg-dd-open');
});

function hgSetView(view, btn) {
 hgView = view;
 document.querySelectorAll('#gl-cbc-haem .hg-view-tab').forEach(function (t) { t.classList.remove('hg-view-active'); });
 if (btn) btn.classList.add('hg-view-active');
 hgRenderRows();
}

function hgInit() {
 if (!document.getElementById('hg-dd-panel')) return;
 hgRenderDiseaseOptions();
 hgRenderRows();
}

/* ── At a Glance: National Dengue Guideline 2025 — Calculators ── */
function dgToggle(el) {
 var wrap = el.closest('.dg-collapse');
 if (!wrap) return;
 wrap.classList.toggle('dg-open');
}

function dgCalcHCT() {
 var baseline = parseFloat(document.getElementById('dg-hb').value);
 var current = parseFloat(document.getElementById('dg-hc').value);
 var ctx = document.getElementById('dg-hctx').value;
 var pulse = parseFloat(document.getElementById('dg-hpls').value);
 var sbp = parseFloat(document.getElementById('dg-hsbp').value);
 var res = document.getElementById('dg-hct-result');
 var emp = document.getElementById('dg-hct-empty');
 if (isNaN(baseline) || isNaN(current)) { res.style.display = 'none'; emp.style.display = 'block'; return; }
 res.style.display = 'block'; emp.style.display = 'none';
 var diff = current - baseline;
 var pct = ((diff / baseline) * 100).toFixed(1);
 var abs = Math.abs(parseFloat(pct));
 var bar = document.getElementById('dg-hct-bar');
 bar.style.width = Math.min(abs / 30 * 100, 100) + '%';
 var bc, lbl;
 if (diff > 0) {
  if (abs >= 20) { bc = 'var(--red)'; lbl = '⬆ HCT Significantly Elevated (≥20%)'; }
  else if (abs >= 10) { bc = '#e3a900'; lbl = '⬆ HCT Moderately Elevated (10–19%)'; }
  else { bc = 'var(--green)'; lbl = '⬆ HCT Mildly Elevated (<10%)'; }
 } else {
  if (abs >= 10) { bc = 'var(--red)'; lbl = '⬇ HCT Significantly Decreased (≥10 pts)'; }
  else if (abs >= 5) { bc = '#e3a900'; lbl = '⬇ HCT Decreasing (5–9 pts)'; }
  else { bc = 'var(--green)'; lbl = '⬇ HCT Stable or Mildly Decreased'; }
 }
 bar.style.background = bc;
 document.getElementById('dg-hct-lbl').textContent = lbl;
 document.getElementById('dg-hct-num').style.color = bc;
 document.getElementById('dg-hct-num').textContent = 'Baseline: ' + baseline + '% → Current: ' + current + '% | Change: ' + (diff > 0 ? '+' : '') + pct + '% (' + (diff > 0 ? '+' : '') + diff.toFixed(1) + ' points)';
 document.getElementById('dg-hct-change-box').style.borderColor = bc;

 var interp = document.getElementById('dg-hct-interp');
 var iCls = 'dg-n-teal', iHTML = '';
 if (diff > 0 && ctx !== 'post') {
  if (abs >= 30) { iCls = 'dg-n-red'; iHTML = '<h4>🔴 Plasma Leakage — SEVERE (≥30% rise = Shock/Impending Shock)</h4><p style="margin:0 0 4px">Initiate shock management immediately.</p><ul><li>NS/Hartmann 10 ml/kg/hr bolus + O₂</li><li>Check ABCS</li><li>Prepare colloid</li><li>Refer to tertiary care</li></ul>'; }
  else if (abs >= 20) { iCls = 'dg-n-red'; iHTML = '<h4>🔴 Plasma Leakage — SIGNIFICANT (≥20% — DHF Criterion Met)</h4><p style="margin:0 0 4px">Significant leakage confirmed. Guide IV fluid accordingly.</p><ul><li>Perform POCUS (pleural effusion/ascites)</li><li>Check albumin (&lt;3.5 g/dL = leakage confirmed)</li><li>Measure pulse pressure (&lt;20 mmHg = impending shock)</li></ul>'; }
  else if (abs >= 10) { iCls = 'dg-n-amber'; iHTML = '<h4>🟡 Plasma Leakage — STARTING (10–19% rise)</h4><p style="margin:0 0 4px">Leakage may be starting or patient is dehydrated.</p><ul><li>Repeat serial HCT every 3–6 hours</li><li>Assess if oral rehydration is adequate</li><li>Monitor urine output (target 0.5–1 ml/kg/hr)</li></ul>'; }
  else { iCls = 'dg-n-green'; iHTML = '<h4>🟢 HCT — Within Normal Range (<10% rise)</h4><p style="margin:0 0 4px">No significant plasma leakage at this time.</p><ul><li>Continue serial HCT monitoring</li><li>Watch for warning signs</li></ul>'; }
 } else if (diff < 0 && ctx === 'pre') {
  iCls = 'dg-n-red';
  if (abs >= 10) { iHTML = '<h4>🔴 Internal Haemorrhage — HIGH SUSPICION</h4><p style="margin:0 0 4px">HCT dropped ≥10 pts before IV fluid — strong indicator of significant concealed/overt haemorrhage.</p><ul><li><b>Prepare blood transfusion</b> (PCV 5 ml/kg or FWB 10 ml/kg)</li><li>Identify bleeding source (overt/concealed)</li><li>Initiate NS resuscitation if in shock</li></ul>'; }
  else { iCls = 'dg-n-amber'; iHTML = '<h4>🟡 HCT Decreasing — Close Monitoring Needed</h4><ul><li>Check for bleeding signs (petechiae, epistaxis, melaena)</li><li>Repeat serial HCT every 4–6 hours</li></ul>'; }
 } else if (diff < 0 && ctx === 'post') {
  if (abs >= 3) { iCls = 'dg-n-teal'; iHTML = '<h4>🔵 Responding to IV Fluid (Expected Response)</h4><p style="margin:0 0 4px">HCT falling after IV fluid — this is the expected response in plasma leakage treatment.</p><ul><li>Gradually reduce IV fluid rate: 7→5→3→1.5 ml/kg/hr</li><li>Ensure urine output (≥0.5–1 ml/kg/hr)</li><li>Watch for fluid overload signs (RR, JVP, CRFT)</li></ul>'; }
  else { iCls = 'dg-n-green'; iHTML = '<h4>🟢 HCT Stable — Good Response</h4><ul><li>Maintain current fluid rate</li><li>Continue serial monitoring</li></ul>'; }
 } else if (diff > 0 && ctx === 'post') {
  iCls = 'dg-n-red';
  iHTML = '<h4>🔴 HCT Rising Despite IV Fluid — Massive Ongoing Leakage</h4><p style="margin:0 0 4px">HCT still rising after fluid — indicates massive ongoing plasma leakage or under-resuscitation.</p><ul><li>Increase IV fluid rate (HCT-guided)</li><li>Consider colloid (mandatory if in shock)</li><li>Check ABCS</li><li>ICU/HDU care may be required</li></ul>';
 }
 interp.className = 'dg-note ' + iCls;
 interp.innerHTML = iHTML;

 var shockBox = document.getElementById('dg-hct-shock');
 if (!isNaN(pulse) && !isNaN(sbp) && sbp > 0) {
  var si = (pulse / sbp).toFixed(2);
  var sc, sl, sint;
  if (si < 0.6) { sc = 'var(--green)'; sl = 'Normal'; sint = 'Haemodynamically stable'; }
  else if (si < 1.0) { sc = '#e3a900'; sl = 'Borderline'; sint = 'Watch closely — possible early compensated shock'; }
  else if (si < 1.4) { sc = 'var(--red)'; sl = 'Shock Likely'; sint = 'Significant haemodynamic compromise — initiate shock protocol'; }
  else { sc = 'var(--red)'; sl = 'Severe Shock'; sint = 'Immediate aggressive resuscitation required'; }
  shockBox.innerHTML = '<div class="dg-result" style="border-color:' + sc + ';margin-top:8px"><div class="dg-result-hdr">Shock Index (Pulse ÷ Systolic BP)</div><div class="dg-result-num" style="color:' + sc + ';font-size:18px">' + si + ' <span style="font-size:11px;font-weight:500">(' + sl + ')</span></div><p style="font-size:10px;color:var(--text);margin-top:5px">' + sint + '</p><p style="font-size:9px;color:var(--muted);margin-top:2px">Normal &lt;0.6 | Borderline 0.6–1.0 | Shock &gt;1.0 | Severe &gt;1.4</p></div>';
 } else { shockBox.innerHTML = ''; }

 var actBox = document.getElementById('dg-hct-action');
 var aCls, aHTML;
 if (diff >= baseline * 0.2 && ctx !== 'post') { aCls = 'dg-n-red'; aHTML = '<h4>🚨 Immediate Action (Significant Leakage)</h4><ul><li>Start IV fluid — HCT-guided rate</li><li>Monitor vital signs every 1–2 hours</li><li>Shock signs → NS/Hartmann 10 ml/kg/hr bolus + O₂</li><li>Prepare colloid; consider referral to tertiary care</li></ul>'; }
 else if (diff <= -10 && ctx === 'pre') { aCls = 'dg-n-red'; aHTML = '<h4>🚨 Immediate Action (Haemorrhage)</h4><ul><li>Send blood group and cross-match immediately</li><li>Prepare PCV 5 ml/kg or FWB 10 ml/kg</li><li>Initiate NS resuscitation if in shock</li><li>Identify bleeding source</li></ul>'; }
 else if (abs < 10 && diff >= 0) { aCls = 'dg-n-green'; aHTML = '<h4>✅ Next Steps</h4><ul><li>Repeat serial HCT every 6–8 hours</li><li>Continue monitoring for warning signs</li><li>Follow-up CBC on 1st afebrile day</li></ul>'; }
 else { aCls = 'dg-n-teal'; aHTML = '<h4>📋 Next Steps</h4><ul><li>Repeat serial HCT every 3–4 hours</li><li>Adjust fluid therapy as needed</li><li>Monitor urine output and vital signs</li></ul>'; }
 actBox.className = 'dg-note ' + aCls;
 actBox.style.marginTop = '8px';
 actBox.innerHTML = aHTML;
}

function dgCalcFluid() {
 var wt = parseFloat(document.getElementById('dg-fwt').value);
 var pt = document.getElementById('dg-fpt').value;
 var hct = parseFloat(document.getElementById('dg-fhct').value);
 var ctx = document.getElementById('dg-fctx').value;
 var emp = document.getElementById('dg-fluid-empty');
 var res = document.getElementById('dg-fluid-result');
 if (isNaN(wt) || wt < 2) { res.style.display = 'none'; emp.style.display = 'block'; return; }
 emp.style.display = 'none'; res.style.display = 'block';

 var w = pt === 'adult' ? Math.min(wt, 50) : wt;
 var maint = 0;
 if (w <= 10) maint = w * 100;
 else if (w <= 20) maint = 1000 + (w - 10) * 50;
 else maint = 1500 + (w - 20) * 20;
 if (pt === 'adult' && wt > 50) maint = 2100;
 var deficit = w * 50;
 var total = maint + deficit;

 var startRate = '', shockRate = '', note = '';
 if (ctx === 'nonshock') {
  startRate = pt === 'child' ? '1.5 ml/kg/hr × 6 hrs = ' + (wt * 1.5).toFixed(0) + ' ml/hr' : '40 ml/hr (12 drops/min) for adults';
  note = 'Monitor every 1 hour. If vitals stable, maintain for 48 hrs.';
 } else if (ctx === 'comp') {
  startRate = pt === 'child' ? 'NS/Hartmann 10 ml/kg/hr × 1–2 hrs = ' + (wt * 10).toFixed(0) + ' ml/hr' : 'NS/Hartmann 500 ml/hr × 1–2 hrs';
  shockRate = 'After stabilisation: 7→5→3→1.5 ml/kg/hr → KVO → stop at 24–48 hrs';
  note = 'Reassess after 15 min. If improved → reduce. If not → Colloid 10 ml/kg/hr.';
 } else {
  startRate = pt === 'child' ? 'NS 20 ml/kg IV bolus in 15–30 min = ' + (wt * 20).toFixed(0) + ' ml + O₂' : 'NS 500 ml bolus (free flow) in 15–30 min + O₂';
  note = 'Check ABCS. NaHCO₃ 1–2 mEq/kg if acidosis. Repeat bolus if needed. → Colloid → Blood if not improving.';
 }

 var hctNote = '';
 if (!isNaN(hct)) {
  if (hct > 45) hctNote = '<div class="dg-note dg-n-amber" style="margin-top:6px"><span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> HCT elevated (' + hct + '%) — significant plasma leakage likely. Consider colloid after 2 crystalloid boluses without improvement.</div>';
  else if (hct < 30) hctNote = '<div class="dg-note dg-n-red" style="margin-top:6px">🚨 HCT low (' + hct + '%) — suspect haemorrhage. Consider blood transfusion (PCV 5 ml/kg or FWB 10 ml/kg).</div>';
 }

 var ptLabel = pt === 'child' ? 'Child' : (pt === 'preg' ? 'Pregnant Adult' : 'Adult');
 res.innerHTML = '<div class="dg-result"><div class="dg-result-hdr">💧 Fluid Quota — ' + wt + ' kg ' + ptLabel + '</div>' +
  '<div class="dg-fres-row"><span>Maintenance (24 hrs)</span><span class="dg-fres-val">' + maint.toFixed(0) + ' ml</span></div>' +
  '<div class="dg-fres-row"><span>5% Deficit (50 ml/kg × ' + w + ' kg)</span><span class="dg-fres-val">' + deficit.toFixed(0) + ' ml</span></div>' +
  '<div class="dg-fres-row"><span>Total Critical Phase Quota (M+5%)</span><span class="dg-fres-val" style="font-size:13px">' + total.toFixed(0) + ' ml</span></div>' +
  '<div class="dg-fres-row"><span>Starting Rate (' + ctx + ')</span><span class="dg-fres-val" style="font-size:10px">' + startRate + '</span></div>' +
  (shockRate ? '<div class="dg-fres-row"><span>After stabilisation</span><span class="dg-fres-val" style="font-size:10px">' + shockRate + '</span></div>' : '') +
  '</div>' + hctNote +
  '<div class="dg-note dg-n-teal" style="margin-top:6px">ℹ️ <b>Note:</b> ' + note + ' This quota is a guide. Some patients need more in shock. Use ideal body weight for obese patients. HCT-guided adjustments take priority over fixed rates.</div>';
}


/* ── At a Glance: CBC Interpretation & Calculators ── */
function glcbcCalcANC() {
 const wbc = parseFloat(document.getElementById('glcbc-anc-wbc-n').value);
 const neut = parseFloat(document.getElementById('glcbc-anc-neut-n').value);
 const band = parseFloat(document.getElementById('glcbc-anc-band-n').value) || 0;
 if (!wbc && wbc !== 0) return;
 const anc = wbc * (neut + band) / 100;
 let interp;
 if (anc < 500) interp = 'Severe neutropenia — high infection risk. Febrile neutropenia protocol if fever present.';
 else if (anc < 1000) interp = 'Moderate neutropenia — increased infection risk.';
 else if (anc < 1500) interp = 'Mild neutropenia.';
 else interp = 'ANC within normal range.';
 document.getElementById('glcbc-anc-val').textContent = Math.round(anc).toLocaleString();
 document.getElementById('glcbc-anc-interp').textContent = interp;
}

function glcbcCalcRetic() {
 const pct = parseFloat(document.getElementById('glcbc-retic-pct-n').value);
 const hct = parseFloat(document.getElementById('glcbc-retic-hct-n').value);
 if (!pct || !hct) return;
 const corrected = pct * (hct / 45);
 let maturation = 1;
 if (hct < 20) maturation = 2.5;
 else if (hct < 25) maturation = 2;
 else if (hct < 35) maturation = 1.5;
 const rpi = corrected / maturation;
 let interp;
 if (rpi > 3) interp = 'RPI ≈ ' + rpi.toFixed(1) + ' — adequate marrow response (haemolysis or acute blood loss).';
 else if (rpi > 2) interp = 'RPI ≈ ' + rpi.toFixed(1) + ' — borderline/adequate response.';
 else interp = 'RPI ≈ ' + rpi.toFixed(1) + ' — inadequate marrow response (nutrient deficiency, marrow failure, ACD).';
 document.getElementById('glcbc-retic-val').textContent = corrected.toFixed(2);
 document.getElementById('glcbc-retic-interp').textContent = interp;
}

function glcbcCalcMentzer() {
 const mcv = parseFloat(document.getElementById('glcbc-mentzer-mcv-n').value);
 const rbc = parseFloat(document.getElementById('glcbc-mentzer-rbc-n').value);
 if (!mcv || !rbc) return;
 const index = mcv / rbc;
 const interp = index > 13
  ? 'Index = ' + index.toFixed(1) + ' → suggests Iron Deficiency Anaemia.'
  : 'Index = ' + index.toFixed(1) + ' → suggests Thalassaemia trait.';
 document.getElementById('glcbc-mentzer-val').textContent = index.toFixed(1);
 document.getElementById('glcbc-mentzer-interp').textContent = interp;
}

function glcbcCalcNLR() {
 const n = parseFloat(document.getElementById('glcbc-nlr-n-n').value);
 const l = parseFloat(document.getElementById('glcbc-nlr-l-n').value);
 if (!n || !l) return;
 const ratio = n / l;
 let interp;
 if (ratio > 9) interp = 'Markedly elevated — associated with higher severity/mortality in sepsis cohorts. Correlate clinically.';
 else if (ratio > 6) interp = 'Significantly elevated — notable inflammatory/stress response.';
 else if (ratio > 3) interp = 'Mildly elevated — early inflammation or stress response.';
 else interp = 'Within normal range.';
 document.getElementById('glcbc-nlr-val').textContent = ratio.toFixed(1);
 document.getElementById('glcbc-nlr-interp').textContent = interp;
}

function glcbcCalcCWBC() {
 const wbc = parseFloat(document.getElementById('glcbc-cwbc-wbc-n').value);
 const nrbc = parseFloat(document.getElementById('glcbc-cwbc-nrbc-n').value) || 0;
 if (!wbc) return;
 const corrected = (wbc * 100) / (100 + nrbc);
 const diff = wbc - corrected;
 const interp = diff > 0
  ? 'Corrected down by ' + Math.round(diff).toLocaleString() + '/μL — original count was falsely elevated by nRBCs.'
  : 'No nRBC correction needed.';
 document.getElementById('glcbc-cwbc-val').textContent = Math.round(corrected).toLocaleString();
 document.getElementById('glcbc-cwbc-interp').textContent = interp;
}

function glcToggle(key) {
 const body    = document.getElementById('glc-' + key + '-body');
 const chevron = document.getElementById('glc-' + key + '-chevron');
 if (!body) return;
 const isOpen = body.style.display !== 'none';
 body.style.display = isOpen ? 'none' : '';
 if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function ucvToggle(key) {
 const card = document.getElementById('ucvs-' + key);
 if (!card) return;
 const body    = card.querySelector('.ucv-sub-body');
 const chevron = card.querySelector('.ucv-sub-chevron');
 if (!body) return;
 const isOpen = body.style.display !== 'none';
 body.style.display = isOpen ? 'none' : '';
 if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
 if (key === 'vcrc' && !isOpen && typeof vcMatchCompWidth === 'function') vcMatchCompWidth();
}

var ucvFactors = {
 // [factor: a×factor=b, decimals_a, decimals_b]
 gluc:  { f: 0.0555,  da: 1,  db: 2 },  // mg/dL → mmol/L
 creat: { f: 88.42,   da: 2,  db: 1 },  // mg/dL → µmol/L
 urea:  { f: 0.1665,  da: 1,  db: 2 },  // mg/dL → mmol/L (MW 60.06)
 bun:   { f: 0.357,   da: 1,  db: 2 },  // mg/dL → mmol/L
 ca:    { f: 0.2495,  da: 1,  db: 2 },  // mg/dL → mmol/L
 mg:    { f: 0.4114,  da: 2,  db: 2 },  // mg/dL → mmol/L
 phos:  { f: 0.3229,  da: 2,  db: 2 },  // mg/dL → mmol/L
 bili:  { f: 17.104,  da: 2,  db: 1 },  // mg/dL → µmol/L
 alb:   { f: 10,      da: 2,  db: 1 },  // g/dL → g/L
 alp:   { f: 0.01667, da: 0,  db: 3 },  // U/L → µkat/L (1 U/L = 0.01667 µkat/L)
 pao2:  { f: 0.1333,  da: 1,  db: 2 },  // mmHg → kPa
 paco2: { f: 0.1333,  da: 1,  db: 2 },  // mmHg → kPa
 lact:  { f: 0.111,   da: 2,  db: 2 },  // mg/dL → mmol/L (MW 90.08)
 bnp:   { f: 0.2887,  da: 1,  db: 2 },  // pg/mL → pmol/L (MW 3464)
 tni:   { f: 1,       da: 3,  db: 3 },  // ng/mL ≡ µg/L (same numeric value)
 ckmb:  { f: 1,       da: 1,  db: 1 },  // ng/mL ≡ µg/L (same numeric value)
 hstni: { f: 0.001,   da: 1,  db: 4 },  // ng/L → µg/L (÷1000)
};

function ucvConvert(key, dir) {
 if (key === 'hba1c') { ucvHba1c(dir); return; }
 const cfg = ucvFactors[key];
 if (!cfg) return;
 const elA = document.getElementById('ucv-' + key + '-a');
 const elB = document.getElementById('ucv-' + key + '-b');
 if (!elA || !elB) return;
 if (dir === 'a') {
  const v = parseFloat(elA.value);
  if (isNaN(v) || elA.value === '') { elB.value = ''; return; }
  elB.value = +(v * cfg.f).toFixed(cfg.db);
 } else {
  const v = parseFloat(elB.value);
  if (isNaN(v) || elB.value === '') { elA.value = ''; return; }
  elA.value = +(v / cfg.f).toFixed(cfg.da);
 }
}

function ucvHba1c(dir) {
 // IFCC (mmol/mol) = (NGSP% - 2.15) × 10.929
 // NGSP% = IFCC/10.929 + 2.15
 const elA = document.getElementById('ucv-hba1c-a');
 const elB = document.getElementById('ucv-hba1c-b');
 if (!elA || !elB) return;
 if (dir === 'a') {
  const v = parseFloat(elA.value);
  if (isNaN(v) || elA.value === '') { elB.value = ''; return; }
  elB.value = +((v - 2.15) * 10.929).toFixed(1);
 } else {
  const v = parseFloat(elB.value);
  if (isNaN(v) || elB.value === '') { elA.value = ''; return; }
  elA.value = +((v / 10.929) + 2.15).toFixed(1);
 }
}

function ucvClear(key) {
 const elA = document.getElementById('ucv-' + key + '-a');
 const elB = document.getElementById('ucv-' + key + '-b');
 if (elA) elA.value = '';
 if (elB) elB.value = '';
}

// ── 3-way tri-converter for ng ⇌ pg ⇌ µg units ──
// tni:   ng/mL ⇌ pg/mL ⇌ µg/L  (ng=µg numerically; pg = ng×1000)
// ckmb:  ng/mL ⇌ pg/mL ⇌ µg/L  (same)
// hstni: ng/L  ⇌ pg/mL ⇌ µg/L  (ng/L = pg/mL numerically; µg/L = ng/L÷1000)
function ucvTri(key, from) {
 var idNg = 'ucv-' + key + '-a';
 var idPg = 'ucv-' + key + '-pg';
 var idUg = 'ucv-' + key + '-b';
 var elNg = document.getElementById(idNg);
 var elPg = document.getElementById(idPg);
 var elUg = document.getElementById(idUg);
 if (!elNg || !elPg || !elUg) return;
 var active = document.activeElement;

 var v = parseFloat(from === 'ng' ? elNg.value : from === 'pg' ? elPg.value : elUg.value);
 if (isNaN(v) || (from === 'ng' ? elNg.value : from === 'pg' ? elPg.value : elUg.value) === '') {
  if (elNg !== active) elNg.value = '';
  if (elPg !== active) elPg.value = '';
  if (elUg !== active) elUg.value = '';
  return;
 }

 var ngVal, pgVal, ugVal;
 if (key === 'hstni') {
  // ng/L ≡ pg/mL (same numeric); µg/L = ng/L ÷ 1000
  if (from === 'ng') { ngVal = v; pgVal = v; ugVal = +(v / 1000).toFixed(6); }
  else if (from === 'pg') { pgVal = v; ngVal = v; ugVal = +(v / 1000).toFixed(6); }
  else { ugVal = v; ngVal = +(v * 1000).toFixed(3); pgVal = ngVal; }
 } else {
  // tni / ckmb: ng/mL ≡ µg/L; pg/mL = ng/mL × 1000
  if (from === 'ng') { ngVal = v; pgVal = +(v * 1000).toFixed(1); ugVal = v; }
  else if (from === 'pg') { pgVal = v; ngVal = +(v / 1000).toFixed(4); ugVal = ngVal; }
  else { ugVal = v; ngVal = v; pgVal = +(v * 1000).toFixed(1); }
 }
 // Same fix as syncField/syncGlobalWeight: don't reassign .value onto the
 // field the user is actively typing in — only mirror into the other two.
 if (elNg !== active) elNg.value = ngVal;
 if (elPg !== active) elPg.value = pgVal;
 if (elUg !== active) elUg.value = ugVal;
}

function ucvTriClear(key) {
 ['a','pg','b'].forEach(function(s) {
  var el = document.getElementById('ucv-' + key + '-' + s);
  if (el) el.value = '';
 });
}

function ucvCalcOsm() {
 const na   = parseFloat(document.getElementById('ucv-osm-na')?.value);
 const gluc = parseFloat(document.getElementById('ucv-osm-gluc')?.value);
 const bun  = parseFloat(document.getElementById('ucv-osm-bun')?.value);
 const resEl  = document.getElementById('ucv-osm-result');
 const valEl  = document.getElementById('ucv-osm-val');
 const intEl  = document.getElementById('ucv-osm-interp');

 if (isNaN(na) || isNaN(gluc) || isNaN(bun)) {
  if (resEl) resEl.style.display = 'none';
  return;
 }
 const osm = (2 * na) + (gluc / 18) + (bun / 2.8);
 if (resEl) resEl.style.display = '';
 if (valEl) valEl.textContent = osm.toFixed(1);

 let interp, color;
 if      (osm < 275) { interp = '🔵 Hypo-osmolar'; color = '#06b6d4'; }
 else if (osm <= 295) { interp = '✅ Normal'; color = '#10b981'; }
 else if (osm <= 320) { interp = '🟡 Mildly elevated'; color = '#f59e0b'; }
 else                 { interp = '🔴 Hyperosmolar'; color = '#ef4444'; }
 if (intEl) { intEl.textContent = interp; intEl.style.color = color; }
}

// ─────────────────────── DENGUE HCT MONITOR ───────────────────────
var dengueReadings = [];

function dengueTab(name) {
 ['tracker','warnings','classify'].forEach(function(t) {
  const panel = document.getElementById('dng-panel-' + t);
  const btn   = document.getElementById('dng-tab-' + t);
  if (panel) panel.style.display = (t === name) ? '' : 'none';
  if (btn) {
   if (t === name) { btn.classList.add('ins-subtab-active'); btn.style.borderColor='#f97316'; btn.style.color='#f97316'; btn.style.background='#f9731622'; }
   else { btn.classList.remove('ins-subtab-active'); btn.style.borderColor=''; btn.style.color=''; btn.style.background=''; }
  }
 });
}

function dengueAddReading() {
 const timeVal = document.getElementById('dng-time-input')?.value.trim();
 const hctVal  = parseFloat(document.getElementById('dng-hct-input')?.value);
 if (!timeVal || isNaN(hctVal) || hctVal < 20 || hctVal > 70) {
  alert('Please enter a valid time label and HCT value (20–70%)');
  return;
 }
 dengueReadings.push({ time: timeVal, hct: hctVal });
 document.getElementById('dng-time-input').value = '';
 document.getElementById('dng-hct-input').value  = '';
 dengueRenderReadings();
 dengueCalc();
}

function dengueRemoveReading(idx) {
 dengueReadings.splice(idx, 1);
 dengueRenderReadings();
 dengueCalc();
}

function dengueRenderReadings() {
 const el      = document.getElementById('dng-readings-list');
 const baseline= parseFloat(document.getElementById('dng-baseline')?.value);
 if (!el) return;
 if (dengueReadings.length === 0) { el.innerHTML = ''; return; }

 let html = '<div style="background:var(--surface-deep);border-radius: 4px;overflow:hidden;margin-bottom:6px"><div style="display:grid;grid-template-columns:1fr auto auto auto;font-size:9.5px;font-weight:700;color:var(--text-faint);text-transform:uppercase;padding:5px 10px;border-bottom:1px solid var(--border)"><span>Time</span><span style="text-align:center">HCT%</span><span style="text-align:center">Δ from baseline</span><span></span></div>';

 dengueReadings.forEach(function(r, i) {
  let deltaHtml = '—';
  let rowBg = '';
  if (!isNaN(baseline)) {
   const delta = r.hct - baseline;
   const pct   = ((delta / baseline) * 100).toFixed(1);
   let color = '#10b981';
   if (delta > 0 && parseFloat(pct) >= 20) { color = '#ef4444'; rowBg = 'background:#ef444412;'; }
   else if (delta > 0 && parseFloat(pct) >= 10) { color = '#f59e0b'; rowBg = 'background:#f59e0b10;'; }
   else if (delta < 0) color = '#06b6d4';
   const sign = delta >= 0 ? '+' : '';
   deltaHtml = '<span style="color:' + color + ';font-weight:700">' + sign + delta.toFixed(1) + '% (' + (delta >= 0 ? '+' : '') + pct + '%)</span>';
  }
  html += '<div style="display:grid;grid-template-columns:1fr auto auto auto;padding:6px 10px;border-bottom:1px solid var(--border);align-items:center;' + rowBg + '">';
  html += '<span style="font-size:11px;color:var(--text)">' + r.time + '</span>';
  html += '<span style="font-size:13px;font-weight:800;color:var(--text);text-align:center;padding:0 10px">' + r.hct.toFixed(1) + '</span>';
  html += '<span style="font-size:11px;text-align:center;padding-right:10px">' + deltaHtml + '</span>';
  html += '<span onclick="dengueRemoveReading(' + i + ')" style="font-size:14px;color:var(--text-faint);cursor:pointer;padding:0 4px">✕</span>';
  html += '</div>';
 });
 html += '</div>';
 el.innerHTML = html;
}

function dengueCalc() {
 dengueRenderReadings();
 const baseline = parseFloat(document.getElementById('dng-baseline')?.value);
 const trendBox = document.getElementById('dng-trend-box');
 const trendRes = document.getElementById('dng-trend-result');
 const trendDet = document.getElementById('dng-trend-detail');
 if (!trendBox || dengueReadings.length === 0 || isNaN(baseline)) {
  if (trendBox) trendBox.style.display = 'none';
  return;
 }

 trendBox.style.display = '';
 const latest  = dengueReadings[dengueReadings.length - 1].hct;
 const delta   = latest - baseline;
 const pct     = ((delta / baseline) * 100).toFixed(1);

 // Trend direction (last 2 readings)
 let trendDir = '';
 if (dengueReadings.length >= 2) {
  const prev = dengueReadings[dengueReadings.length - 2].hct;
  const diff = latest - prev;
  if      (diff > 1)  trendDir = ' • 📈 Rising';
  else if (diff < -1) trendDir = ' • 📉 Falling';
  else                trendDir = ' • ➡️ Stable';
 }

 let msg, color;
 if (delta >= baseline * 0.20) {
  msg   = '🔴 ≥20% rise from baseline — Significant plasma leakage • Fluid resuscitation indicated';
  color = '#ef4444';
 } else if (delta >= baseline * 0.10) {
  msg   = '🟡 10–19% rise — Monitor closely • Repeat HCT in 2–4 hrs';
  color = '#f59e0b';
 } else if (delta < -baseline * 0.10) {
  msg   = '🔵 Falling HCT — Recovery OR internal bleeding • Correlate clinically';
  color = '#06b6d4';
 } else {
  msg   = '✅ HCT within acceptable range';
  color = '#10b981';
 }

 if (trendRes) { trendRes.textContent = msg; trendRes.style.color = color; }
 if (trendDet) { trendDet.textContent = 'Latest: ' + latest.toFixed(1) + '% • Baseline: ' + baseline + '% • Change: ' + (delta >= 0 ? '+' : '') + delta.toFixed(1) + '% (' + (delta >= 0 ? '+' : '') + pct + '%)' + trendDir; }
 if (trendBox) trendBox.style.borderColor = color + '60';
}

function dengueWarnCheck(el) {
 el.classList.toggle('checked');
 const chkEl = el.querySelector('.dng-warn-chk');
 if (chkEl) chkEl.textContent = el.classList.contains('checked') ? '☑' : '☐';
 const items   = document.querySelectorAll('.dng-warn-item');
 const checked = document.querySelectorAll('.dng-warn-item.checked').length;
 const resEl   = document.getElementById('dng-warn-result');
 if (!resEl) return;
 if (checked === 0) { resEl.style.display = 'none'; return; }
 resEl.style.display = '';
 if (checked >= 1) {
  resEl.style.background = '#ef444422';
  resEl.style.border     = '1px solid #ef4444';
  resEl.style.color      = '#ef4444';
  resEl.innerHTML        = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> ' + checked + ' warning sign' + (checked > 1 ? 's' : '') + ' present — Hospital admission required';
 }
}

// ─────────────────────── INSULIN ───────────────────────
var insSensitivity = 'normal';
var insScaleLevel  = 'medium';

function insTab(name) {
 ['types','calc','sliding','notes'].forEach(function(t) {
  const panel = document.getElementById('ins-panel-' + t);
  const btn   = document.getElementById('ins-tab-' + t);
  if (panel) panel.style.display = (t === name) ? '' : 'none';
  if (btn)   { btn.classList.toggle('ins-subtab-active', t === name); }
 });
 if (name === 'calc' || name === 'sliding') calcInsDosingAll();
}

function setInsSens(val) {
 insSensitivity = val;
 ['sensitive','normal','resistant'].forEach(function(s) {
  const b = document.getElementById('ins-sens-' + s);
  if (b) b.classList.toggle('ins-sens-active', s === val);
 });
 calcInsDosingAll();
}

function setInsScale(val) {
 insScaleLevel = val;
 ['low','medium','high'].forEach(function(s) {
  const b = document.getElementById('ins-scale-' + s);
  if (b) b.classList.toggle('ins-sens-active', s === val);
 });
 calcInsDosingAll();
}

function calcInsDosingAll() {
 const wt  = parseFloat(document.getElementById('ins-wt')?.value)  || 60;
 const cbg = parseFloat(document.getElementById('ins-cbg')?.value) || 10;

 // TDD based on sensitivity
 let factor = 0.5;
 if      (insSensitivity === 'sensitive')  factor = 0.4;
 else if (insSensitivity === 'resistant')  factor = 0.65;
 const tdd    = Math.round(wt * factor);
 const basal  = Math.round(tdd * 0.5);
 const bolus  = Math.round((tdd * 0.5) / 3);

 // ISF: 100 / TDD (mmol/L drop per unit)
 const isf    = +(100 / tdd).toFixed(1);
 const target = 7.0;
 const correctionRaw = (cbg - target) / isf;
 const correction    = Math.max(0, Math.round(correctionRaw));

 const tddEl  = document.getElementById('ins-tdd');
 const basEl  = document.getElementById('ins-basal');
 const bolEl  = document.getElementById('ins-bolus');
 const corEl  = document.getElementById('ins-correction');
 const corSub = document.getElementById('ins-correction-sub');
 const alertEl= document.getElementById('ins-calc-alert');

 if (tddEl)  tddEl.textContent  = tdd;
 if (basEl)  basEl.textContent  = basal;
 if (bolEl)  bolEl.textContent  = bolus;
 if (corEl)  corEl.textContent  = correction;
 if (corSub) corSub.textContent = 'units extra (ISF=' + isf + ' mmol/L per unit)';

 // Alert for hypoglycaemia
 if (alertEl) {
  if (cbg < 4.0) {
   alertEl.style.display = '';
   alertEl.style.background = '#ef444422';
   alertEl.style.border = '1px solid #ef4444';
   alertEl.style.color = '#ef4444';
   alertEl.innerHTML = '🚨 CBG &lt;4.0 — HYPOGLYCAEMIA • Do NOT give insulin • Treat immediately';
  } else if (cbg <= 7.0) {
   alertEl.style.display = '';
   alertEl.style.background = '#10b98115';
   alertEl.style.border = '1px solid #10b981';
   alertEl.style.color = '#10b981';
   alertEl.innerHTML = '✅ CBG ' + cbg + ' mmol/L — Within target range • No correction needed';
   if (corEl) corEl.textContent = '0';
  } else {
   alertEl.style.display = 'none';
  }
 }

 // Sliding scale highlight
 const hlEl = document.getElementById('ins-scale-highlight');
 if (hlEl) {
  const scales = {
   low:    [[4,0],[7,0],[10,2],[14,4],[18,6],[22,8],[Infinity,10]],
   medium: [[4,0],[7,0],[10,4],[14,6],[18,8],[22,10],[Infinity,12]],
   high:   [[4,0],[7,0],[10,6],[14,8],[18,10],[22,12],[Infinity,14]]
  };
  const scaleData = scales[insScaleLevel];
  let dose = 0, rangeLabel = '', color = '#10b981';
  if (cbg < 4.0) {
   rangeLabel = 'CBG &lt;4.0'; dose = -1; color = '#ef4444';
  } else {
   for (var i = 0; i < scaleData.length; i++) {
    if (cbg <= scaleData[i][0]) { dose = scaleData[i][1]; break; }
   }
   if      (cbg <= 7.0)  { rangeLabel = '4.0–7.0'; color = '#10b981'; }
   else if (cbg <= 10.0) { rangeLabel = '7.1–10.0'; color = '#10b981'; }
   else if (cbg <= 14.0) { rangeLabel = '10.1–14.0'; color = '#f59e0b'; }
   else if (cbg <= 18.0) { rangeLabel = '14.1–18.0'; color = '#f97316'; }
   else if (cbg <= 22.0) { rangeLabel = '18.1–22.0'; color = '#ef4444'; }
   else                  { rangeLabel = '&gt;22.0'; color = '#ef4444'; }
  }
  if (dose === -1) {
   hlEl.innerHTML = '<div style="font-size:12px;font-weight:700;color:#ef4444">🚨 CBG &lt;4.0 — HOLD insulin • Treat hypoglycaemia first</div>';
   hlEl.style.borderColor = '#ef444460';
  } else {
   const doseText = dose === 0 ? 'No insulin needed' : dose + ' units Actrapid S/C';
   const callText = cbg > 22 ? ' + Notify doctor' : '';
   hlEl.innerHTML = '<div style="font-size:10px;color:var(--text-faint);margin-bottom:4px">CBG ' + cbg.toFixed(1) + ' mmol/L → Range: ' + rangeLabel + '</div><div style="font-size:16px;font-weight:800;color:' + color + '">' + doseText + callText + '</div><div style="font-size:10px;color:var(--text-faint);margin-top:3px">Scale: ' + insScaleLevel.charAt(0).toUpperCase() + insScaleLevel.slice(1) + '</div>';
   hlEl.style.borderColor = color + '60';
  }
 }
}

// ─────────────────────── APACHE II ───────────────────────
var apacheO2Mode = 'pf';

function toggleApRef(btn, id) {
 const el = document.getElementById(id);
 if (!el) return;
 const opening = el.style.display !== 'block';
 el.style.display = opening ? 'block' : 'none';
 btn.classList.toggle('open', opening);
}

function setApacheO2(mode) {
 apacheO2Mode = mode;
 const pfRow   = document.getElementById('ap-pf-row');
 const pao2Row = document.getElementById('ap-pao2-row');
 const pfLabel   = document.getElementById('ap-pf-label');
 const pao2Label = document.getElementById('ap-pao2-label');
 const btnPF   = document.getElementById('ap-o2-pf');
 const btnPaO2 = document.getElementById('ap-o2-pao2');
 const activeS  = 'flex:1;padding:8px 4px;border:none;background:#ef444422;color:#ef4444;font-size:10.5px;font-weight:700;cursor:pointer';
 const inactiveS = 'flex:1;padding:8px 4px;border:none;background:transparent;color:var(--text-faint);font-size:10.5px;font-weight:600;cursor:pointer';
 if (mode === 'pf') {
  if (pfRow)   pfRow.style.display   = '';
  if (pao2Row) pao2Row.style.display = 'none';
  if (pfLabel)   pfLabel.style.display   = '';
  if (pao2Label) pao2Label.style.display = 'none';
  if (btnPF)   btnPF.style.cssText   = activeS;
  if (btnPaO2) btnPaO2.style.cssText = inactiveS;
 } else {
  if (pfRow)   pfRow.style.display   = 'none';
  if (pao2Row) pao2Row.style.display = '';
  if (pfLabel)   pfLabel.style.display   = 'none';
  if (pao2Label) pao2Label.style.display = '';
  if (btnPF)   btnPF.style.cssText   = inactiveS;
  if (btnPaO2) btnPaO2.style.cssText = activeS;
 }
 // collapse any open O2 reference text + reset its chevron when switching mode
 ['ap-ref-aado2','ap-ref-pao2'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
 ['ap-refbtn-aado2','ap-refbtn-pao2'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('open'); });
 calcAPACHE();
}

function calcAPACHE() {
 // ── A: Physiology ──
 const temp  = parseFloat(document.getElementById('ap-temp')?.value)  || 37;
 const map   = parseFloat(document.getElementById('ap-map')?.value)   || 90;
 const hr    = parseFloat(document.getElementById('ap-hr')?.value)    || 80;
 const rr    = parseFloat(document.getElementById('ap-rr')?.value)    || 16;
 const ph    = parseFloat(document.getElementById('ap-ph')?.value)    || 7.40;
 const na    = parseFloat(document.getElementById('ap-na')?.value)    || 138;
 const k     = parseFloat(document.getElementById('ap-k')?.value)     || 4.0;
 const cr    = parseFloat(document.getElementById('ap-cr')?.value)    || 1.0;
 const hct   = parseFloat(document.getElementById('ap-hct')?.value)   || 38;
 const wbc   = parseFloat(document.getElementById('ap-wbc')?.value)   || 8;
 const gcs   = parseFloat(document.getElementById('ap-gcs')?.value)   || 15;
 const aado2 = parseFloat(document.getElementById('ap-aado2')?.value) || 100;
 const pao2  = parseFloat(document.getElementById('ap-pao2')?.value)  || 90;
 const arf   = parseInt(document.querySelector('input[name="ap-arf"]:checked')?.value || 1);

 // Temperature score
 let tS = 0;
 if      (temp >= 41)    tS = 4;
 else if (temp >= 39)    tS = 3;
 else if (temp >= 38.5)  tS = 1;
 else if (temp >= 36)    tS = 0;
 else if (temp >= 34)    tS = 1;
 else if (temp >= 32)    tS = 2;
 else if (temp >= 30)    tS = 3;
 else                    tS = 4;

 // MAP score
 let mapS = 0;
 if      (map >= 160) mapS = 4;
 else if (map >= 130) mapS = 3;
 else if (map >= 110) mapS = 2;
 else if (map >= 70)  mapS = 0;
 else if (map >= 50)  mapS = 2;
 else                 mapS = 4;

 // HR score
 let hrS = 0;
 if      (hr >= 180) hrS = 4;
 else if (hr >= 140) hrS = 3;
 else if (hr >= 110) hrS = 2;
 else if (hr >= 70)  hrS = 0;
 else if (hr >= 55)  hrS = 2;
 else if (hr >= 40)  hrS = 3;
 else                hrS = 4;

 // RR score
 let rrS = 0;
 if      (rr >= 50) rrS = 4;
 else if (rr >= 35) rrS = 3;
 else if (rr >= 25) rrS = 1;
 else if (rr >= 12) rrS = 0;
 else if (rr >= 10) rrS = 1;
 else if (rr >= 6)  rrS = 2;
 else               rrS = 4;

 // Oxygenation score
 let o2S = 0;
 if (apacheO2Mode === 'pf') {
  if      (aado2 >= 500) o2S = 4;
  else if (aado2 >= 350) o2S = 3;
  else if (aado2 >= 200) o2S = 2;
  else                   o2S = 0;
 } else {
  if      (pao2 < 55)  o2S = 4;
  else if (pao2 <= 60) o2S = 3;
  else if (pao2 <= 70) o2S = 1;
  else                 o2S = 0;
 }

 // pH score
 let phS = 0;
 if      (ph >= 7.7)   phS = 4;
 else if (ph >= 7.6)   phS = 3;
 else if (ph >= 7.5)   phS = 1;
 else if (ph >= 7.33)  phS = 0;
 else if (ph >= 7.25)  phS = 2;
 else if (ph >= 7.15)  phS = 3;
 else                  phS = 4;

 // Na score
 let naS = 0;
 if      (na >= 180) naS = 4;
 else if (na >= 160) naS = 3;
 else if (na >= 155) naS = 2;
 else if (na >= 150) naS = 1;
 else if (na >= 130) naS = 0;
 else if (na >= 120) naS = 2;
 else if (na >= 111) naS = 3;
 else                naS = 4;

 // K score
 let kS = 0;
 if      (k >= 7)    kS = 4;
 else if (k >= 6)    kS = 3;
 else if (k >= 5.5)  kS = 1;
 else if (k >= 3.5)  kS = 0;
 else if (k >= 3.0)  kS = 1;
 else if (k >= 2.5)  kS = 2;
 else                kS = 4;

 // Creatinine score (doubled if ARF)
 let crBase = 0;
 if      (cr >= 3.5) crBase = 4;
 else if (cr >= 2.0) crBase = 3;
 else if (cr >= 1.5) crBase = 1;
 else if (cr >= 0.6) crBase = 0;
 else                crBase = 2;
 const crS = arf === 1 ? Math.min(crBase * 2, 8) : crBase;

 // HCT score
 let hctS = 0;
 if      (hct >= 60)   hctS = 4;
 else if (hct >= 50)   hctS = 2;
 else if (hct >= 46)   hctS = 1;
 else if (hct >= 30)   hctS = 0;
 else if (hct >= 20)   hctS = 2;
 else                  hctS = 4;

 // WBC score
 let wbcS = 0;
 if      (wbc >= 40)   wbcS = 4;
 else if (wbc >= 20)   wbcS = 2;
 else if (wbc >= 15)   wbcS = 1;
 else if (wbc >= 3)    wbcS = 0;
 else if (wbc >= 1)    wbcS = 2;
 else                  wbcS = 4;

 // GCS: 15 − score
 const gcsS = 15 - gcs;

 const physTotal = tS + mapS + hrS + rrS + o2S + phS + naS + kS + crS + hctS + wbcS + gcsS;

 // Live per-parameter point badges
 const setBadge = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
 setBadge('ap-score-temp', tS);
 setBadge('ap-score-map', mapS);
 setBadge('ap-score-hr', hrS);
 setBadge('ap-score-rr', rrS);
 setBadge('ap-score-aado2', o2S);
 setBadge('ap-score-pao2', o2S);
 setBadge('ap-score-ph', phS);
 setBadge('ap-score-na', naS);
 setBadge('ap-score-k', kS);
 setBadge('ap-score-cr', crS);
 setBadge('ap-score-hct', hctS);
 setBadge('ap-score-wbc', wbcS);
 setBadge('ap-score-gcs', gcsS);

 // ── B: Age ──
 const age = parseFloat(document.getElementById('ap-age')?.value) || 50;
 let ageS = 0;
 if      (age >= 75) ageS = 6;
 else if (age >= 65) ageS = 5;
 else if (age >= 55) ageS = 3;
 else if (age >= 45) ageS = 2;
 else                ageS = 0;
 { const el = document.getElementById('ap-score-age'); if (el) el.textContent = ageS; }

 // ── C: Chronic ──
 const chronicS = parseInt(document.querySelector('input[name="ap-chronic"]:checked')?.value || 0);

 const total = physTotal + ageS + chronicS;

 // Illness severity band — NOTE: original APACHE II mortality prediction requires a
 // diagnostic-category coefficient combined with the score in a logistic regression
 // equation; a raw score→percentage lookup (population-derived, no category adjustment)
 // is not a validated per-patient mortality estimate. Severity band only.
 let mort, color, interp;
 if      (total < 10)  { mort = 'Low';        color = '#10b981'; interp = '✅ Low severity'; }
 else if (total < 15)  { mort = 'Low–Mod';    color = '#10b981'; interp = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Moderate'; }
 else if (total < 20)  { mort = 'Moderate';   color = '#f59e0b'; interp = '🟡 High severity'; }
 else if (total < 25)  { mort = 'High';       color = '#f97316'; interp = '🟠 Very high severity'; }
 else if (total < 30)  { mort = 'Very High';  color = '#ef4444'; interp = '🔴 Critical'; }
 else                  { mort = 'Extreme';    color = '#ef4444'; interp = '🔴 Critical — very high illness severity'; }

 const totalEl  = document.getElementById('apache-total');
 const mortEl   = document.getElementById('apache-mortality');
 const bkEl     = document.getElementById('apache-breakdown');
 const intEl    = document.getElementById('apache-interp');
 const boxEl    = document.getElementById('apache-result-box');

 if (totalEl) totalEl.textContent = total;
 if (mortEl)  { mortEl.textContent = mort; mortEl.style.color = color; }
 if (bkEl)    bkEl.textContent = 'Physiology: ' + physTotal + ' • Age: ' + ageS + ' • Chronic: ' + chronicS;
 if (intEl)   { intEl.innerHTML = interp; intEl.style.color = color; }
 if (boxEl)   boxEl.style.borderColor = color + '60';
}

// ─────────────────────── GCS ───────────────────────
var gcsScores = { eye: null, verbal: null, motor: null };
var gcsVerbalIntubated = false;

function gcsSetVerbalMode(mode) {
 const nonincBtn = document.getElementById('gcs-vmode-noninc');
 const intBtn    = document.getElementById('gcs-vmode-int');
 const nonincGrp = document.getElementById('gcs-verbal-noninc');
 const intGrp    = document.getElementById('gcs-verbal-int');
 if (nonincBtn) nonincBtn.classList.toggle('active', mode === 'noninc');
 if (intBtn)    intBtn.classList.toggle('active', mode === 'int');
 if (nonincGrp) nonincGrp.style.display = mode === 'noninc' ? '' : 'none';
 if (intGrp)    intGrp.style.display = mode === 'int' ? '' : 'none';
 // Switching modes clears whichever verbal score was selected, since the two
 // scales aren't the same scoring rubric — avoids silently mixing them.
 gcsScores.verbal = null;
 gcsVerbalIntubated = (mode === 'int');
 const group = document.getElementById('gcs-verbal-group');
 if (group) group.querySelectorAll('.gcs-opt').forEach(function (o) {
  o.classList.remove('selected');
  const r = o.querySelector('input[type="radio"]');
  if (r) r.checked = false;
 });
 calcGCS();
}

function gcsSelectVerbalT(score, el) {
 gcsVerbalIntubated = true;
 gcsSelect('verbal', score, el);
}

function gcsSelect(component, score, el) {
 gcsScores[component] = score;
 if (component === 'verbal' && el && !el.closest('#gcs-verbal-int')) gcsVerbalIntubated = false;
 const group = document.getElementById('gcs-' + component + '-group');
 if (group) group.querySelectorAll('.gcs-opt').forEach(function (o) {
  o.classList.remove('selected');
  const r = o.querySelector('input[type="radio"]');
  if (r) r.checked = false;
 });
 if (el) {
  el.classList.add('selected');
  const r2 = el.querySelector('input[type="radio"]');
  if (r2) r2.checked = true;
 }
 calcGCS();
}

function calcGCS() {
 const e = gcsScores.eye, v = gcsScores.verbal, m = gcsScores.motor;
 const totalEl = document.getElementById('gcs-total');
 const bkEl    = document.getElementById('gcs-breakdown');
 const intEl   = document.getElementById('gcs-interp');
 const boxEl   = document.getElementById('gcs-result-box');
 const vSuffix = gcsVerbalIntubated ? 'T' : '';
 if (e === null || v === null || m === null) {
  if (totalEl) totalEl.textContent = '—';
  if (bkEl)   bkEl.innerHTML = 'E<sub>' + (e!==null?e:'—') + '</sub> V<sub>' + (v!==null?v+vSuffix:'—') + '</sub> M<sub>' + (m!==null?m:'—') + '</sub>';
  if (intEl)  { intEl.textContent = 'Select all three components'; intEl.style.color = 'var(--text-faint)'; }
  return;
 }
 const total = e + v + m;
 if (totalEl) totalEl.textContent = total + vSuffix;
 if (bkEl)   bkEl.innerHTML = 'E<sub>' + e + '</sub> V<sub>' + v + vSuffix + '</sub> M<sub>' + m + '</sub>';
 let label, color;
 if      (total >= 13) { label = '✅ Mild — GCS ' + total; color = '#10b981'; }
 else if (total >= 9)  { label = '🟡 Moderate — GCS ' + total; color = '#f59e0b'; }
 else if (total >= 4)  {
   label = gcsVerbalIntubated
     ? '🔴 Severe — GCS ' + total + 'T • Already intubated — optimize sedation/ventilation'
     : '🔴 Severe — GCS ' + total + ' • Consider intubation';
   color = '#ef4444';
 }
 else {
   label = gcsVerbalIntubated
     ? '🔴 GCS ' + total + 'T • Already intubated — urgent neuro reassessment'
     : '🔴 GCS ' + total + ' • Immediate airway management';
   color = '#ef4444';
 }
 if (gcsVerbalIntubated && total >= 9) label += ' (V estimated — intubated)';
 if (intEl)  { intEl.textContent = label; intEl.style.color = color; }
 if (boxEl)  boxEl.style.borderColor = color + '60';
}

// ─────────────────────── NEWS2 ───────────────────────
var newsScale = 1;
var newsAVPU  = 0;

function setNews2Scale(s) {
 newsScale = s;
 const active  = 'border:1px solid #f97316;background:#f9731622;color:#f97316;font-size:10.5px;font-weight:700;cursor:pointer;flex:1;padding:5px 0;border-radius: 4px;';
 const inactive = 'border:1px solid var(--border-strong);background:transparent;color:var(--text-faint);font-size:10.5px;font-weight:600;cursor:pointer;flex:1;padding:5px 0;border-radius: 4px;';
 document.getElementById('news-scale1').style.cssText = (s===1 ? active : inactive);
 document.getElementById('news-scale2').style.cssText = (s===2 ? active : inactive);
 const lbl = document.getElementById('news-spo2-label');
 if (lbl) lbl.textContent = s === 1 ? 'SpO₂ % (Scale 1)' : 'SpO₂ % (Scale 2 — target 88–92%)';
 calcNEWS2();
}

function setNewsAVPU(code, score, el) {
 newsAVPU = score;
 ['A','C','V','P','U'].forEach(c => {
  const b = document.getElementById('news-avpu-' + c);
  if (b) b.classList.remove('news-avpu-active');
 });
 if (el) el.classList.add('news-avpu-active');
 calcNEWS2();
}

function calcNEWS2() {
 const rr   = parseFloat(document.getElementById('news-rr')?.value)   || 16;
 const spo2 = parseFloat(document.getElementById('news-spo2')?.value) || 97;
 const sbp  = parseFloat(document.getElementById('news-sbp')?.value)  || 120;
 const hr   = parseFloat(document.getElementById('news-hr')?.value)   || 80;
 const temp = parseFloat(document.getElementById('news-temp')?.value) || 37.0;
 const o2   = parseInt(document.querySelector('input[name="news-o2"]:checked')?.value || 0);

 // RR score
 let rrS = 0;
 if      (rr <= 8)              rrS = 3;
 else if (rr <= 11)             rrS = 1;
 else if (rr <= 20)             rrS = 0;
 else if (rr <= 24)             rrS = 2;
 else                           rrS = 3;

 // SpO2 score
 let spo2S = 0;
 if (newsScale === 1) {
  if      (spo2 <= 91) spo2S = 3;
  else if (spo2 <= 93) spo2S = 2;
  else if (spo2 <= 95) spo2S = 1;
  else                 spo2S = 0;
 } else {
  if      (spo2 <= 83) spo2S = 3;
  else if (spo2 <= 85) spo2S = 2;
  else if (spo2 <= 87) spo2S = 1;
  else if (spo2 <= 92) spo2S = 0;
  else if (spo2 <= 94) spo2S = (o2 ? 1 : 0);
  else if (spo2 <= 96) spo2S = (o2 ? 2 : 0);
  else                 spo2S = (o2 ? 3 : 0);
 }

 // BP score
 let sbpS = 0;
 if      (sbp <= 90)  sbpS = 3;
 else if (sbp <= 100) sbpS = 2;
 else if (sbp <= 110) sbpS = 1;
 else if (sbp <= 219) sbpS = 0;
 else                 sbpS = 3;

 // HR score
 let hrS = 0;
 if      (hr <= 40)  hrS = 3;
 else if (hr <= 50)  hrS = 1;
 else if (hr <= 90)  hrS = 0;
 else if (hr <= 110) hrS = 1;
 else if (hr <= 130) hrS = 2;
 else                hrS = 3;

 // Temp score
 let tmpS = 0;
 if      (temp <= 35.0) tmpS = 3;
 else if (temp <= 36.0) tmpS = 1;
 else if (temp <= 38.0) tmpS = 0;
 else if (temp <= 39.0) tmpS = 1;
 else                   tmpS = 2;

 const cnsS = newsAVPU;
 const total = rrS + spo2S + o2 + sbpS + hrS + tmpS + cnsS;

 const totalEl  = document.getElementById('news2-total');
 const riskEl   = document.getElementById('news2-risk');
 const actEl    = document.getElementById('news2-action');
 const bkEl     = document.getElementById('news2-breakdown');
 const boxEl    = document.getElementById('news2-result-box');

 if (totalEl) totalEl.textContent = total;
 if (bkEl)   bkEl.textContent = 'RR:' + rrS + ' • SpO₂:' + spo2S + ' • O₂:' + o2 + ' • BP:' + sbpS + ' • HR:' + hrS + ' • Temp:' + tmpS + ' • CNS:' + cnsS;

 const hasSingle3 = [rrS, spo2S, sbpS, hrS, tmpS, cnsS].some(s => s === 3);
 let risk, action, color;
 if (total >= 7 || (hasSingle3 && total >= 5)) {
  risk = '🔴 HIGH Risk'; action = 'Urgent ICU review / escalate immediately'; color = '#ef4444';
 } else if (total >= 5 || hasSingle3) {
  risk = '🟡 MEDIUM Risk'; action = 'Hourly obs • Senior review'; color = '#f59e0b';
 } else {
  risk = '✅ LOW Risk'; action = '4–6 hrly observations'; color = '#10b981';
 }
 if (riskEl) { riskEl.textContent = risk; riskEl.style.color = color; }
 if (actEl)  { actEl.textContent = action; }
 if (boxEl)  boxEl.style.borderColor = color + '60';
}

// ─────────────────────── BRAIN DEATH ASSESSMENT ───────────────────────
function calcBrainDeath() {
 const pre1 = document.getElementById('bd-pre1')?.checked;
 const pre2 = document.getElementById('bd-pre2')?.checked;
 const pre3 = document.getElementById('bd-pre3')?.checked;
 const pre4 = document.getElementById('bd-pre4')?.checked;
 const gcs  = document.getElementById('bd-gcs')?.checked;
 const pupil = document.getElementById('bd-pupil')?.checked;
 const corneal = document.getElementById('bd-corneal')?.checked;
 const oculo = document.getElementById('bd-oculo')?.checked;
 const vestib = document.getElementById('bd-vestib')?.checked;
 const gag  = document.getElementById('bd-gag')?.checked;
 const apnoea = document.getElementById('bd-apnoea')?.checked;

 const sumEl = document.getElementById('bd-summary');
 const detEl = document.getElementById('bd-detail');
 const boxEl = document.getElementById('bd-result-box');
 if (!sumEl) return;

 const prereqs = [pre1,pre2,pre3,pre4].filter(Boolean).length;
 const reflexes = [gcs,pupil,corneal,oculo,vestib,gag].filter(Boolean).length;
 const allPre = prereqs === 4;
 const allReflex = reflexes === 6;
 const allMet = allPre && allReflex && apnoea;

 let summary, detail, color, borderColor;

 if (allMet) {
  summary = '🔴 BD/DNC Clinical Criteria Assessment Complete';
  detail = 'All 4 prerequisites satisfied • All 6 brainstem reflexes absent • Apnoea test positive (PaCO₂ ≥60 mmHg AND ≥20 above baseline AND pH &lt;7.30)<br><strong style="color:#ef4444">This checklist supports — but does NOT constitute — a legal determination of death. Formal institutional/legal declaration requires the qualified examiner(s) to independently confirm findings per local protocol (second independent examination, ancillary testing if any confounder present, time-of-death documentation) before organ donation discussion or withdrawal of support.</strong>';
  color = '#ef4444'; borderColor = '#ef444460';
 } else if (!allPre) {
  summary = '⏸ Prerequisites Incomplete (' + prereqs + '/4)';
  detail = 'Ensure all prerequisites are met before proceeding with clinical testing. Exclude reversible causes first.';
  color = '#f59e0b'; borderColor = '#f59e0b40';
 } else if (allPre && reflexes === 0 && !apnoea) {
  summary = '✅ Prerequisites met — Begin Clinical Testing';
  detail = 'All prerequisites satisfied. Proceed with systematic brainstem reflex testing. Apnoea test to be performed last.';
  color = 'var(--accent)'; borderColor = 'var(--border)';
 } else if (allPre && reflexes > 0 && !allReflex) {
  summary = '🔍 Testing In Progress (' + reflexes + '/6 reflexes absent)';
  detail = 'Continue brainstem reflex assessment. ' + (6 - reflexes) + ' reflex(es) remaining. Complete all before apnoea test.';
  color = '#06b6d4'; borderColor = '#06b6d440';
 } else if (allPre && allReflex && !apnoea) {
  summary = '⚡ All Reflexes Absent — Perform Apnoea Test';
  detail = 'All 6 brainstem reflexes absent. Pre-oxygenate (FiO₂ 1.0 × 10 min), baseline ABG, then proceed with apnoea test. Confirm PaCO₂ ≥60 mmHg.';
  color = '#f97316'; borderColor = '#f9731640';
 } else {
  summary = '— Tick criteria above to assess —';
  detail = '';
  color = 'var(--text-muted)'; borderColor = 'var(--border)';
 }

 sumEl.style.color = color;
 sumEl.innerHTML = summary;
 detEl.innerHTML = detail;
 if (boxEl) boxEl.style.borderColor = borderColor;
}

// ─────────────────────── SEPSIS-3 CRITERIA ───────────────────────
function s3Pick(rowId, val, btnEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.dataset.score = val;
  row.querySelectorAll('.s3-pill').forEach(p => p.classList.remove('sel'));
  if (btnEl) btnEl.classList.add('sel');
  calcSepsis3();
}

function calcSepsis3() {
  const qEls = ['s3-q-rr','s3-q-gcs','s3-q-sbp'].map(id => document.getElementById(id)?.checked);
  const qCount = qEls.filter(Boolean).length;
  const qBox = document.getElementById('s3-q-result');
  if (qBox) {
    if (qCount >= 2) {
      qBox.style.color = '#ef4444'; qBox.style.borderColor = '#ef444460';
      qBox.innerHTML = 'qSOFA: ' + qCount + '/3 — 🔴 High risk: obtain full SOFA, consider ICU';
    } else {
      qBox.style.color = 'var(--text-muted)'; qBox.style.borderColor = 'var(--border-strong)';
      qBox.innerHTML = 'qSOFA: ' + qCount + '/3 — Low risk (continue monitoring if clinical suspicion remains)';
    }
  }

  const rows = ['s3-row-resp','s3-row-coag','s3-row-liver','s3-row-cvs','s3-row-cns','s3-row-renal'];
  let sofaTotal = 0;
  rows.forEach(id => {
    const el = document.getElementById(id);
    if (el) sofaTotal += parseInt(el.dataset.score || '0');
  });

  const vaso = document.getElementById('s3-shock-vaso')?.checked;
  const lactate = document.getElementById('s3-shock-lactate')?.checked;

  const titleEl = document.getElementById('s3-result-title');
  const detEl = document.getElementById('s3-result-detail');
  const boxEl = document.getElementById('s3-result');
  if (!titleEl) return;

  let title, detail, color, borderColor;
  const sepsisPositive = sofaTotal >= 2;
  const shockPositive = sepsisPositive && vaso && lactate;

  if (shockPositive) {
    title = '🔴 Septic Shock — Total SOFA: ' + sofaTotal;
    detail = 'Suspected infection + SOFA ≥2 + vasopressor requirement (MAP≥65) + lactate &gt;2 mmol/L — all criteria met.<br><strong style="color:#ef4444">Start Sepsis Bundle immediately: blood cultures → broad-spectrum antibiotics (within 1 hour) → 30mL/kg crystalloid → titrate vasopressor → source control.</strong>';
    color = '#ef4444'; borderColor = '#ef444460';
  } else if (sepsisPositive) {
    title = '🟠 Sepsis (SOFA-defined) — Total SOFA: ' + sofaTotal;
    detail = 'SOFA ≥2 (acute rise) — in the context of suspected/confirmed infection, this meets criteria for sepsis.<br>To check for septic shock, tick the two Step 3 criteria (vasopressor + lactate).';
    color = '#f97316'; borderColor = '#f9731640';
  } else if (sofaTotal > 0) {
    title = '🟡 SOFA: ' + sofaTotal + ' (< 2) — Sepsis criteria not met';
    detail = 'Organ dysfunction detected but SOFA &lt;2 — does not meet strict Sepsis-3 criteria. If clinical suspicion remains high, reassess and monitor closely.';
    color = 'var(--accent)'; borderColor = 'var(--border)';
  } else {
    title = '🟢 SOFA: 0 — No organ dysfunction detected';
    detail = 'No organ dysfunction identified based on current input. Continue clinical monitoring if infection is suspected.';
    color = 'var(--text-muted)'; borderColor = 'var(--border-strong)';
  }

  titleEl.style.color = color;
  titleEl.innerHTML = title;
  detEl.innerHTML = detail;
  if (boxEl) boxEl.style.borderColor = borderColor;
}

// ─────────────────────── FOUR SCORE ───────────────────────
function f4Pick(rowId, val, btnEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.dataset.score = val;
  row.querySelectorAll('.f4-pill').forEach(p => p.classList.remove('sel'));
  if (btnEl) btnEl.classList.add('sel');
}

function calcFour() {
  const rows = ['f4-row-eye','f4-row-motor','f4-row-brainstem','f4-row-resp'];
  let total = 0;
  const parts = [];
  rows.forEach(id => {
    const el = document.getElementById(id);
    const v = el ? parseInt(el.dataset.score || '0') : 0;
    total += v;
    parts.push(v);
  });
  const [e, m, b, r] = parts;

  const titleEl = document.getElementById('f4-result-title');
  const detEl = document.getElementById('f4-result-detail');
  const boxEl = document.getElementById('f4-result');
  if (!titleEl) return;

  let title, detail, color, borderColor;
  const breakdown = 'E' + e + ' + M' + m + ' + B' + b + ' + R' + r + ' = <strong>' + total + '</strong>/16';

  if (total === 0) {
    title = '🔴 FOUR Score: 0/16 — Deep Coma / Possible Brain Death Pattern';
    detail = breakdown + '<br>All components at minimum — no eye opening, no motor response, absent brainstem reflexes, breathing at ventilator rate. <strong style="color:#ef4444">If clinically appropriate, evaluate formally for brain death (see Brain Death card).</strong>';
    color = '#ef4444'; borderColor = '#ef444460';
  } else if (total <= 8) {
    title = '🟠 FOUR Score: ' + total + '/16 — Severe Impairment';
    detail = breakdown + '<br>Associated with high in-hospital mortality. Ensure airway protection, review sedation, and correlate with imaging/labs.';
    color = '#f97316'; borderColor = '#f9731640';
  } else if (total <= 12) {
    title = '🟡 FOUR Score: ' + total + '/16 — Moderate Impairment';
    detail = breakdown + '<br>Partial preservation of brainstem/motor function. Trend serially to detect improvement or deterioration.';
    color = 'var(--accent)'; borderColor = 'var(--border)';
  } else {
    title = '🟢 FOUR Score: ' + total + '/16 — Mild / Near-Normal';
    detail = breakdown + '<br>Preserved eye tracking, motor response, brainstem reflexes, and regular breathing pattern.';
    color = '#10b981'; borderColor = '#10b98140';
  }

  titleEl.style.color = color;
  titleEl.innerHTML = title;
  detEl.innerHTML = detail;
  if (boxEl) boxEl.style.borderColor = borderColor;
}

// ─────────────────────── LIGHT'S CRITERIA — Pleural Effusion ───────────────────────
function calcLights() {
  const g = id => { const el = document.getElementById(id); return el ? parseFloat(el.value) : NaN; };
  const pprot = g('lights-pprot-n'), sprot = g('lights-sprot-n');
  const pldh = g('lights-pldh-n'), sldh = g('lights-sldh-n'), uln = g('lights-uln-n');

  const verdictEl = document.getElementById('lights-verdict');
  const detailEl = document.getElementById('lights-detail');
  const boxEl = document.getElementById('lights-result-box');
  if (!verdictEl) return;

  const c1box = document.getElementById('lights-c1'), c1val = document.getElementById('lights-c1-val');
  const c2box = document.getElementById('lights-c2'), c2val = document.getElementById('lights-c2-val');
  const c3box = document.getElementById('lights-c3'), c3val = document.getElementById('lights-c3-val');

  if ([pprot, sprot, pldh, sldh, uln].some(v => isNaN(v) || v <= 0)) {
    verdictEl.textContent = '— Enter all values —';
    verdictEl.style.color = 'var(--text-muted)';
    detailEl.innerHTML = '';
    [c1val, c2val, c3val].forEach(el => { if (el) el.textContent = '—'; });
    return;
  }

  const ratioProt = pprot / sprot;
  const ratioLdh = pldh / sldh;
  const ldhCut = (2 / 3) * uln;

  const pos1 = ratioProt > 0.5;
  const pos2 = ratioLdh > 0.6;
  const pos3 = pldh > ldhCut;

  function paint(box, val, positive, text) {
    if (val) val.textContent = text;
    if (val) val.style.color = positive ? '#ef4444' : '#10b981';
    if (box) { box.style.border = '1px solid ' + (positive ? '#ef444450' : 'var(--border)'); }
  }
  paint(c1box, c1val, pos1, ratioProt.toFixed(2) + (pos1 ? ' ✓' : ' ✗'));
  paint(c2box, c2val, pos2, ratioLdh.toFixed(2) + (pos2 ? ' ✓' : ' ✗'));
  paint(c3box, c3val, pos3, pldh.toFixed(0) + ' vs ' + ldhCut.toFixed(0) + (pos3 ? ' ✓' : ' ✗'));

  const exudate = pos1 || pos2 || pos3;
  const posCount = [pos1, pos2, pos3].filter(Boolean).length;

  if (exudate) {
    verdictEl.textContent = '🔴 EXUDATE';
    verdictEl.style.color = '#ef4444';
    detailEl.innerHTML = posCount + ' of 3 Light\'s criteria positive. Consistent with an exudative effusion — pursue infective, malignant, or inflammatory work-up.';
    if (boxEl) boxEl.style.borderColor = '#ef444460';
  } else {
    verdictEl.textContent = '🟢 TRANSUDATE';
    verdictEl.style.color = '#10b981';
    detailEl.innerHTML = 'All 3 Light\'s criteria negative. Consistent with a transudative effusion — evaluate for heart failure, cirrhosis, or hypoalbuminaemia.';
    if (boxEl) boxEl.style.borderColor = '#10b98140';
  }
}

// ─────────────────────── JONES CRITERIA — Acute Rheumatic Fever ───────────────────────
function calcJones() {
  const highRisk = (document.querySelector('input[name="jones-risk"]:checked') || {}).value === 'high';
  const recurrent = (document.querySelector('input[name="jones-episode"]:checked') || {}).value === 'recurrent';
  const gasEvidence = !!document.getElementById('jones-gas')?.checked;

  const arthritisLabel = document.getElementById('jones-maj-arthritis-label');
  const arthritisSub = document.getElementById('jones-maj-arthritis-sub');
  if (arthritisLabel) arthritisLabel.textContent = highRisk ? '🦴 Polyarthritis, Monoarthritis, or Polyarthralgia' : '🦴 Polyarthritis';
  if (arthritisSub) arthritisSub.textContent = highRisk ? 'Moderate/high-risk: broader arthritis definition applies' : 'Low-risk: polyarthritis only';

  const feverLabel = document.getElementById('jones-min-fever-label');
  if (feverLabel) feverLabel.textContent = highRisk ? '🌡 Fever ≥38.0°C' : '🌡 Fever ≥38.5°C';
  const esrSub = document.getElementById('jones-min-esr-sub');
  if (esrSub) esrSub.textContent = highRisk ? 'ESR ≥30 mm/hr and/or CRP ≥3 mg/dL' : 'ESR ≥60 mm/hr and/or CRP ≥3 mg/dL';

  const majIds = ['jones-maj-carditis', 'jones-maj-arthritis', 'jones-maj-chorea', 'jones-maj-erythema', 'jones-maj-nodules'];
  const minIds = ['jones-min-fever', 'jones-min-arthralgia', 'jones-min-esr', 'jones-min-pr'];

  const arthritisIsMajor = !!document.getElementById('jones-maj-arthritis')?.checked;
  const carditisIsMajor = !!document.getElementById('jones-maj-carditis')?.checked;

  let majorCount = majIds.filter(id => document.getElementById(id)?.checked).length;
  let minorCount = 0;
  if (document.getElementById('jones-min-fever')?.checked) minorCount++;
  if (document.getElementById('jones-min-arthralgia')?.checked && !arthritisIsMajor) minorCount++;
  if (document.getElementById('jones-min-esr')?.checked) minorCount++;
  if (document.getElementById('jones-min-pr')?.checked && !carditisIsMajor) minorCount++;

  const verdictEl = document.getElementById('jones-verdict');
  const detailEl = document.getElementById('jones-detail');
  const boxEl = document.getElementById('jones-result-box');
  if (!verdictEl) return;

  const anyTicked = majorCount > 0 || minorCount > 0 || gasEvidence;
  if (!anyTicked) {
    verdictEl.textContent = '— Tick criteria above —';
    verdictEl.style.color = 'var(--text-muted)';
    detailEl.innerHTML = '';
    return;
  }

  let meets = false;
  if (majorCount >= 2) meets = true;
  else if (majorCount >= 1 && minorCount >= 2) meets = true;
  else if (recurrent && highRisk && minorCount >= 3) meets = true;

  const breakdown = majorCount + ' major, ' + minorCount + ' minor — ' + (gasEvidence ? 'GAS evidence present' : 'GAS evidence NOT documented');

  if (meets && gasEvidence) {
    verdictEl.textContent = '🔴 ARF Criteria Met';
    verdictEl.style.color = '#ef4444';
    detailEl.innerHTML = breakdown + '.<br>Diagnosis of acute rheumatic fever supported. Start anti-inflammatory therapy, begin secondary prophylaxis, arrange echocardiography and cardiology/paediatric referral.';
    if (boxEl) boxEl.style.borderColor = '#ef444460';
  } else if (meets && !gasEvidence) {
    verdictEl.textContent = '🟡 Criteria Met — GAS Evidence Missing';
    verdictEl.style.color = '#f59e0b';
    detailEl.innerHTML = breakdown + '.<br>Major/minor threshold reached, but evidence of preceding GAS infection is required to confirm the diagnosis — send ASO/anti-DNase B titres or throat culture.';
    if (boxEl) boxEl.style.borderColor = '#f59e0b60';
  } else {
    verdictEl.textContent = '🟢 Criteria Not Met';
    verdictEl.style.color = 'var(--text-muted)';
    detailEl.innerHTML = breakdown + '.<br>Does not currently meet Jones criteria for ' + (recurrent ? 'recurrent' : 'initial') + ' ARF. Reassess if new findings emerge.';
    if (boxEl) boxEl.style.borderColor = 'var(--border)';
  }
}

// ─────────────────────── GOLD CRITERIA — COPD Staging ───────────────────────
function calcGOLD() {
  const ratio = parseFloat(document.getElementById('gold-ratio-n')?.value);
  const fev1 = parseFloat(document.getElementById('gold-fev1-n')?.value);
  const gradeEl = document.getElementById('gold-grade-display');
  const verdictEl = document.getElementById('gold-verdict');
  const detailEl = document.getElementById('gold-detail');
  const boxEl = document.getElementById('gold-result-box');
  if (!gradeEl || !verdictEl) return;

  const highSymptom = (document.querySelector('input[name="gold-symptom"]:checked') || {}).value === 'high';
  const highExac = (document.querySelector('input[name="gold-exac"]:checked') || {}).value === 'high';

  let group;
  if (highExac) group = 'E';
  else if (highSymptom) group = 'B';
  else group = 'A';

  if (isNaN(ratio) || isNaN(fev1)) {
    gradeEl.textContent = '—';
    verdictEl.textContent = '— Enter spirometry values —';
    verdictEl.style.color = 'var(--text-muted)';
    detailEl.innerHTML = '';
    return;
  }

  if (ratio >= 0.70) {
    gradeEl.textContent = 'No airflow obstruction confirmed';
    gradeEl.style.color = 'var(--text-muted)';
    verdictEl.textContent = '🟢 FEV1/FVC ≥0.70';
    verdictEl.style.color = '#10b981';
    detailEl.innerHTML = 'Post-bronchodilator FEV1/FVC ≥0.70 — GOLD spirometric staging does not apply. Reconsider diagnosis or look for an alternative cause of symptoms.';
    if (boxEl) boxEl.style.borderColor = '#10b98140';
    return;
  }

  let grade, color, desc;
  if (fev1 >= 80) { grade = 'GOLD 1'; desc = 'Mild'; color = '#10b981'; }
  else if (fev1 >= 50) { grade = 'GOLD 2'; desc = 'Moderate'; color = '#3b82f6'; }
  else if (fev1 >= 30) { grade = 'GOLD 3'; desc = 'Severe'; color = '#f97316'; }
  else { grade = 'GOLD 4'; desc = 'Very Severe'; color = '#ef4444'; }

  gradeEl.textContent = grade + ' — ' + desc + ' (FEV1 ' + fev1.toFixed(0) + '%)';
  gradeEl.style.color = color;

  verdictEl.textContent = grade + desc[0] + ' • Group ' + group;
  verdictEl.style.color = color;
  detailEl.innerHTML = 'Airflow obstruction confirmed (FEV1/FVC ' + ratio.toFixed(2) + ') → <strong>' + grade + ' (' + desc + ')</strong>. Symptom/exacerbation profile → <strong>Group ' + group + '</strong>' +
    (group === 'E' ? ' — high exacerbation risk, escalate maintenance therapy regardless of symptom burden.' :
     group === 'B' ? ' — high symptoms, low exacerbation risk — consider LABA+LAMA.' :
     ' — low symptoms, low exacerbation risk — bronchodilator therapy as needed.');
  if (boxEl) boxEl.style.borderColor = color + '60';
}

// ─────────────────────── CURB-65 — Community-Acquired Pneumonia Severity ───────────────────────
function calcCURB65() {
  const ids = ['curb-c', 'curb-u', 'curb-r', 'curb-b', 'curb-65'];
  const score = ids.filter(id => document.getElementById(id)?.checked).length;

  const scoreEl = document.getElementById('curb65-score');
  const riskEl = document.getElementById('curb65-risk');
  const mgmtEl = document.getElementById('curb65-management');
  const boxEl = document.getElementById('curb65-result-box');
  if (!scoreEl) return;

  scoreEl.textContent = score;

  let risk, color, mortality, mgmt;
  if (score <= 1) {
    risk = '🟢 Low Risk'; color = '#10b981'; mortality = '<3%';
    mgmt = 'Outpatient treatment is generally appropriate.';
  } else if (score === 2) {
    risk = '🟡 Moderate Risk'; color = '#f59e0b'; mortality = '~9%';
    mgmt = 'Consider a short inpatient stay or closely-supervised outpatient treatment.';
  } else {
    risk = '🔴 High Risk'; color = '#ef4444'; mortality = '15–40%';
    mgmt = 'Hospitalise. Consider ICU admission, especially if score is 4–5.';
  }

  scoreEl.style.color = color;
  riskEl.textContent = risk;
  riskEl.style.color = color;
  mgmtEl.innerHTML = 'Estimated mortality ≈ ' + mortality + '. ' + mgmt;
  if (boxEl) boxEl.style.borderColor = color + '60';
}


function cvPick(rowId, val, btnEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.dataset.score = val;
  row.querySelectorAll('.cv-pill').forEach(p => p.classList.remove('sel'));
  if (btnEl) btnEl.classList.add('sel');
}

function calcCHADSVASC() {
  const flags = [
    ['cv-chf', 1], ['cv-htn', 1], ['cv-dm', 1],
    ['cv-stroke', 2], ['cv-vasc', 1]
  ];   // 2024 ESC CHA₂DS₂-VA: female sex is a risk modifier, not independently scored
  let total = 0;
  flags.forEach(([id, wt]) => { if (document.getElementById(id).checked) total += wt; });
  const ageRow = document.getElementById('cv-row-age');
  const ageScore = ageRow ? parseInt(ageRow.dataset.score || '0') : 0;
  total += ageScore;

  const titleEl = document.getElementById('cv-result-title');
  const detEl = document.getElementById('cv-result-detail');
  const boxEl = document.getElementById('cv-result');
  if (!titleEl) return;

  // Approximate published annual stroke-risk figures by score
  const riskTable = [0.2, 0.6, 2.2, 3.2, 4.8, 7.2, 9.7, 11.2, 10.8, 12.2];
  const risk = riskTable[Math.min(total, 9)];

  let title, detail, color, borderColor;

  if (total === 0) {
    title = '🟢 CHA₂DS₂-VA: ' + total + ' — Low Risk';
    detail = 'Approx. annual stroke risk ≈ ' + risk + '%* . No antithrombotic therapy generally needed.';
    color = '#10b981'; borderColor = '#10b98140';
  } else if (total === 1) {
    title = '🟡 CHA₂DS₂-VA: ' + total + ' — Intermediate Risk';
    detail = 'Approx. annual stroke risk ≈ ' + risk + '%* . Anticoagulation should be considered, individualised to bleeding risk (2024 ESC).';
    color = 'var(--accent)'; borderColor = 'var(--border)';
  } else {
    title = '🔴 CHA₂DS₂-VA: ' + total + ' — High Risk';
    detail = 'Approx. annual stroke risk ≈ ' + risk + '%* . Anticoagulation recommended (score ≥2), subject to bleeding-risk assessment (e.g. HAS-BLED).';
    color = '#ef4444'; borderColor = '#ef444460';
  }
  detail += '<div style="font-size:9px;color:var(--text-faint);margin-top:4px">*Cohort-derived estimate — varies by population studied; the score\'s primary validated use is guiding the anticoagulation decision, not precise individual risk prediction.</div>';

  titleEl.style.color = color;
  titleEl.innerHTML = title;
  detEl.innerHTML = detail;
  if (boxEl) boxEl.style.borderColor = borderColor;
}

// ─────────────────────── CHILD-PUGH SCORE ───────────────────────
function cpPick(rowId, val, btnEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.dataset.score = val;
  row.querySelectorAll('.cp-pill').forEach(p => p.classList.remove('sel'));
  if (btnEl) btnEl.classList.add('sel');
}

function calcChildPugh() {
  const rows = ['cp-row-bili', 'cp-row-alb', 'cp-row-inr', 'cp-row-asc', 'cp-row-enc'];
  let total = 0;
  rows.forEach(id => {
    const el = document.getElementById(id);
    total += el ? parseInt(el.dataset.score || '1') : 1;
  });

  const titleEl = document.getElementById('cp-result-title');
  const detEl = document.getElementById('cp-result-detail');
  const boxEl = document.getElementById('cp-result');
  if (!titleEl) return;

  let title, detail, color, borderColor, cls, survival;
  if (total <= 6) {
    cls = 'A'; survival = '~100% 1-yr / ~85% 2-yr survival';
    color = '#10b981'; borderColor = '#10b98140';
  } else if (total <= 9) {
    cls = 'B'; survival = '~80% 1-yr / ~60% 2-yr survival';
    color = '#f97316'; borderColor = '#f9731640';
  } else {
    cls = 'C'; survival = '~45% 1-yr / ~35% 2-yr survival';
    color = '#ef4444'; borderColor = '#ef444460';
  }
  title = (cls === 'A' ? '🟢' : cls === 'B' ? '🟠' : '🔴') + ' Child-Pugh: ' + total + '/15 — Class ' + cls;
  detail = survival + '. ' + (cls === 'C' ? 'Decompensated cirrhosis — consider transplant referral and MELD scoring.' : cls === 'B' ? 'Significant functional compromise — optimise and monitor closely.' : 'Well-compensated cirrhosis.');

  titleEl.style.color = color;
  titleEl.innerHTML = title;
  detEl.innerHTML = detail;
  if (boxEl) boxEl.style.borderColor = borderColor;
}
let dkaKetone = 'none';
let dkaAMS = 'alert';

function dkaSetKetone(val, btn) {
  dkaKetone = val;
  ['none','mild','mod','high'].forEach(k => {
    const el = document.getElementById('dka-ket-' + k);
    if (el) { el.classList.remove('ins-sens-active'); }
  });
  if (btn) btn.classList.add('ins-sens-active');
  calcDKA();
}

function dkaSetAMS(val, btn) {
  dkaAMS = val;
  ['alert','drowsy','stupor','coma'].forEach(k => {
    const el = document.getElementById('dka-ams-' + k);
    if (el) { el.classList.remove('ins-sens-active'); }
  });
  if (btn) btn.classList.add('ins-sens-active');
  calcDKA();
}

function calcDKA() {
  const gluc   = parseFloat(document.getElementById('dka-gluc')?.value) || 0;
  const ph     = parseFloat(document.getElementById('dka-ph')?.value) || 0;
  const hco3   = parseFloat(document.getElementById('dka-hco3')?.value) || 0;
  const ag     = parseFloat(document.getElementById('dka-ag')?.value) || 0;
  const osm    = parseFloat(document.getElementById('dka-osm')?.value) || 0;
  const sglt2  = document.getElementById('dka-sglt2')?.checked;
  const preg   = document.getElementById('dka-preg')?.checked;
  const t1dm   = document.getElementById('dka-t1dm')?.checked;

  const diagEl = document.getElementById('dka-diagnosis');
  const sevEl  = document.getElementById('dka-severity');
  const criEl  = document.getElementById('dka-criteria');
  const mgtEl  = document.getElementById('dka-management');
  const boxEl  = document.getElementById('dka-result-box');
  if (!diagEl) return;

  const ketHigh = dkaKetone === 'high' || dkaKetone === 'mod';
  const ketPos  = dkaKetone !== 'none';
  const amsAltered = dkaAMS !== 'alert';
  const phLow    = ph > 0 && ph < 7.30;
  const hco3Low  = hco3 < 18;
  const acidotic = phLow || hco3Low;   // 2024 consensus: pH<7.30 AND/OR HCO3<18 (either qualifies)
  const agHigh   = ag > 12;            // supportive only — NOT a mandatory diagnostic gate (2024 consensus removed AG as required criterion)
  const glucHighNumeric = gluc >= 11.1;   // 2024 consensus exact threshold: ≥200 mg/dL = 11.1 mmol/L
  const glucHigh = glucHighNumeric || t1dm;   // 2024 consensus: hyperglycaemia criterion = glucose ≥11.1 mmol/L OR known diabetes (for standard-DKA path only)
  const glucVeryHigh = gluc >= 33.3;   // 2024 consensus exact threshold: ≥600 mg/dL = 33.3 mmol/L
  const osmHigh  = osm > 300;   // input field is EFFECTIVE osmolality (2Na+Glu/18) — 2024 consensus threshold is >300 mOsm/kg for effective osm (vs >320 for total osm)

  let diagnosis = '', severity = '', criteria = '', management = '', color = '#f59e0b', borderColor = '#f59e0b60';

  // ── Scoring logic ──
  const isDKA    = acidotic && ketHigh && glucHigh;
  const isEuDKA  = acidotic && ketHigh && !glucHighNumeric;   // euDKA defined by genuinely non-elevated glucose — NOT overridden by known-diabetes flag, since euDKA occurs precisely in known diabetics with normal/near-normal glucose
  const isHHS    = glucVeryHigh && osmHigh && !ketHigh && !acidotic;
  const isOverlap= glucVeryHigh && osmHigh && ketPos && acidotic;
  const euDKAtrigger = isEuDKA;

  if (isDKA || euDKAtrigger || isHHS || isOverlap) {

    if (isOverlap) {
      diagnosis = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> DKA + HHS Overlap';
      color = '#f97316'; borderColor = '#f9731660';
      criteria = '✅ High glucose (&ge;33.3) • ✅ High eff. osmolality (>300) • ✅ Acidosis (pH&lt;7.30 and/or HCO₃&lt;18) • ✅ Ketonaemia present';
      management = `<strong style="color:#f97316">Treat as DKA primarily.</strong><br>
IV 0.9% NaCl — correct volume deficit carefully (avoid rapid osmolality drop)<br>
IV Actrapid infusion 0.1 unit/kg/hr • Add 5–10% dextrose when glucose &lt;13.9 mmol/L (250 mg/dL) — continue insulin<br>
Check K⁺ — replace before starting insulin if &lt;3.5 mEq/L<br>
Monitor osmolality 4-hourly — target drop &lt;3 mOsm/kg/hr<br>
<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Rapid osmolality correction risks cerebral oedema`;
    }
    else if (isEuDKA) {
      diagnosis = '🟣 Euglycaemic DKA (euDKA)';
      color = 'var(--accent)'; borderColor = 'var(--border)';

      const flags = [];
      if (sglt2) flags.push('SGLT2i use ✔');
      if (preg)  flags.push('Pregnancy ✔');
      if (t1dm)  flags.push('T1DM ✔');

      criteria = `✅ Glucose &lt;11.1 mmol/L • ✅ pH &lt;7.30 and/or HCO₃ &lt;18 • ✅ Ketonaemia present${ag > 0 ? ` • AG ${ag.toFixed(0)} (supportive)` : ''}`;
      if (flags.length) criteria += `<br><span style="color:var(--accent);font-weight:600">Trigger: ${flags.join(' • ')}</span>`;

      management = `<strong style="color:var(--accent)">Do NOT be misled by normal glucose.</strong><br>
IV Actrapid 0.05–0.1 unit/kg/hr<br>
Start 5–10% Dextrose infusion immediately (glucose normal — still needs insulin to clear ketones)<br>
IV 0.9% NaCl — volume replacement<br>
K⁺ replacement — check hourly initially<br>
Hold SGLT2i immediately and do not restart until fully recovered<br>
Target: ketones &lt;0.6 mmol/L • (pH &ge;7.30 or HCO₃ &ge;18) before stopping insulin`;
    }
    else if (isDKA) {
      // DKA severity — 2024 consensus: multi-parameter (pH, HCO3, ketones, mental status), not pH alone
      let sev = '', sevColor = '';
      const severeFlags = (ph > 0 && ph < 7.00) || (hco3 > 0 && hco3 < 10) || dkaKetone === 'high' || dkaAMS === 'stupor' || dkaAMS === 'coma';
      const moderateFlags = (ph >= 7.00 && ph <= 7.25) || (hco3 >= 10 && hco3 < 15) || dkaKetone === 'mod' || dkaAMS === 'drowsy';
      if (severeFlags)       { sev = 'Severe DKA';   sevColor = '#ef4444'; }
      else if (moderateFlags){ sev = 'Moderate DKA'; sevColor = '#f59e0b'; }
      else                    { sev = 'Mild DKA';    sevColor = '#10b981'; }
      if (preg && ph < 7.30) { sev = 'Severe (Pregnancy)'; sevColor = '#ef4444'; }

      diagnosis = `🔴 Diabetic Ketoacidosis (DKA)`;
      color = '#ef4444'; borderColor = '#ef444460';
      severity = `<span style="color:${sevColor}">${sev}</span>`;

      criteria = `✅ Glucose &ge;11.1 mmol/L • ✅ pH &lt;7.30 and/or HCO₃ &lt;18 • ✅ Ketonaemia${ag > 0 ? ` • AG ${ag.toFixed(0)} (supportive)` : ''}`;

      management = `<strong style="color:#ef4444">ICU/HDU management:</strong><br>
IV 0.9% NaCl: 1L over 1st hr • then 500ml/hr × 2h • then 250ml/hr (reassess)<br>
IV Actrapid infusion: 0.1 unit/kg/hr (fixed rate) — do NOT bolus<br>
K⁺ replacement: if K &lt;3.5 → hold insulin, give ~10 mmol/hr KCl until K&gt;3.5; K 3.5–5.5 → add 20–30 mmol KCl per litre IV fluid; K &gt;5.5 → hold K<br>
Switch to 5% Dextrose + 0.45% NaCl when glucose &lt;13.9 mmol/L (250 mg/dL) — continue insulin until ketosis resolves<br>
Bicarbonate: only if pH &lt;6.9 (100 mEq NaHCO₃ over 2h)<br>
Target resolution: ketones &lt;0.6 • (pH &ge;7.30 or HCO₃ &ge;18)`;
    }
    else if (isHHS) {
      diagnosis = '🔵 Hyperglycaemic Hyperosmolar State (HHS)';
      color = '#06b6d4'; borderColor = '#06b6d460';
      criteria = `✅ Glucose ≥33.3 mmol/L (≥600 mg/dL) • ✅ Eff. osmolality >300 • ✅ Ketonaemia absent/trace • ✅ pH &ge;7.30 and HCO₃ &ge;15 (absence of acidosis)`;

      const amsMsg = dkaAMS !== 'alert' ? `<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> AMS/coma present — consistent with severe HHS` : '';

      management = `<strong style="color:var(--accent)">Volume replacement is primary therapy:</strong><br>
Average fluid deficit: 9–10 litres (replace over 24–48h — NOT rapidly)<br>
IV 0.9% NaCl: 1L over 1st hr • then titrate (250–500ml/hr based on response)<br>
Target osmolality drop: &lt;3 mOsm/kg/hr — risk cerebral oedema if faster<br>
IV Actrapid: start only after adequate volume — 0.05 unit/kg/hr; add dextrose when glucose &lt;15 mmol/L<br>
K⁺ replacement: always — total body deficit severe despite apparent normoK<br>
DVT prophylaxis mandatory — very high thrombosis risk<br>
Identify precipitant: infection, MI, stroke, medications<br>
${amsMsg}`;
    }

  } else {
    // Insufficient criteria / inconclusive
    const hasAcidosis = acidotic;
    const hasKetones  = ketPos;

    if (hasAcidosis && hasKetones && !agHigh) {
      diagnosis = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Possible Starvation Ketosis / Alcoholic KA';
      color = '#f59e0b'; borderColor = '#f59e0b40';
      criteria = 'AG not elevated — consider starvation ketosis, AKA, or mixed picture';
      management = `Check for alcohol history • check lactate • if AKA: IV dextrose + thiamine`;
    } else if (glucVeryHigh && !osmHigh) {
      diagnosis = '<span style="font-size:0.8em;vertical-align:0.10em">⚠️</span> Severe Hyperglycaemia — HHS criteria not fully met';
      color = '#06b6d4'; borderColor = '#06b6d440';
      criteria = 'Glucose very high but osmolality &lt;320 — reassess osmolality calculation';
      management = `Recalculate: Eff. Osm = 2×Na + Glucose(mg/dL)/18<br>Convert mmol/L to mg/dL: multiply by 18`;
    } else {
      diagnosis = '— Enter values to differentiate —';
      severity = ''; criteria = ''; management = '';
      color = 'var(--text-muted)'; borderColor = '#f59e0b30';
    }
  }

  diagEl.textContent = '';
  diagEl.innerHTML = diagnosis;
  diagEl.style.color = color;
  sevEl.innerHTML = severity;
  criEl.innerHTML = criteria;
  mgtEl.innerHTML = management;
  if (boxEl) boxEl.style.borderColor = borderColor;
}

function toggleCalc(id) {
  const card = document.getElementById(id);
  if (!card) return;
  const body = card.querySelector('.calc-body');
  const chevron = card.querySelector('.calc-chevron');
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  card.classList.toggle('is-expanded', !isOpen);
  if (chevron) chevron.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
  if (typeof scheduleSpecialCompactFit === 'function') scheduleSpecialCompactFit();
  if (typeof scheduleDefibCompactFit === 'function') scheduleDefibCompactFit();
  if (!isOpen && id === 'calccard-gcs' && typeof gcsAlignVerbalToggle === 'function') {
    requestAnimationFrame(gcsAlignVerbalToggle);
  }
  if (!isOpen && id === 'calccard-ventcalc' && typeof vcAlignContentWidth === 'function') {
    requestAnimationFrame(vcAlignContentWidth);
  }
  if (!isOpen && id === 'calccard-unitconv' && typeof ucvAlignContentWidth === 'function') {
    requestAnimationFrame(ucvAlignContentWidth);
  }
}

/* The Non-intubated/Intubated toggle box under "Verbal Response (V)" is sized
   in JS (not fixed CSS px) so its right edge lines up exactly under the
   right edge of that heading text, whatever the heading actually measures
   on this device/font. If the toggle's own text would overflow that width,
   its font-size is nudged down (never below a legible floor) rather than
   letting it clip or spill past the heading. */
function gcsAlignVerbalToggle() {
  const headTxt = document.getElementById('gcs-verbal-head-txt');
  const box = document.getElementById('gcs-vmode-box');
  if (!headTxt || !box) return;
  const targetWidth = headTxt.getBoundingClientRect().width;
  if (!targetWidth) return;
  box.style.width = targetWidth + 'px';
  const texts = box.querySelectorAll('.gcs-vmode-txt, .gcs-vmode-sep');
  let fontSize = 9;
  const minFont = 6.5;
  texts.forEach(function (el) { el.style.fontSize = fontSize + 'px'; });
  let guard = 0;
  while (box.scrollWidth > box.clientWidth + 1 && fontSize > minFont && guard < 20) {
    fontSize -= 0.3;
    texts.forEach(function (el) { el.style.fontSize = fontSize.toFixed(2) + 'px'; });
    guard++;
  }
}
window.addEventListener('resize', function () {
  const card = document.getElementById('calccard-gcs');
  if (!card) return;
  const body = card.querySelector('.calc-body');
  if (body && body.style.display !== 'none') gcsAlignVerbalToggle();
});

/* ── Special Calc: equal-gap "everything fits" layout ──
   Distributes ONE equal pixel gap across every vertical gap between the
   header subtitle's baseline and the footer's top edge — the gap above the
   tab-bar capsule, the gap below it, every gap between the Special Calc
   rows/cards, and the gap above the footer. (The 6px gap between the 4 tab
   pills themselves is untouched — that's inside the tab-bar, not one of
   these.) Only active while the Special Calc tab is showing; switching to
   another tab restores each element's normal CSS spacing.

   IMPORTANT: "available space" is measured against the real viewport height
   (window.visualViewport.height), not the on-screen distance between the
   eyebrow and the footer — that distance collapses to equal the content's
   own natural height once margins are zeroed for measurement, which was an
   earlier bug here that made the computed gap always hit the floor. */
var SPECIAL_GAP_MIN = 6; // px floor once content no longer fits the screen — falls back to normal scroll
var specialGapRaf = null;

function specialGapModeOn() {
  var header = document.querySelector('.app-header');
  var tabBar = document.querySelector('.tab-bar');
  var tabEl = document.getElementById('tab-special');
  var footer = document.querySelector('.app-footer');
  if (header) header.style.paddingBottom = '0px';
  if (tabBar) { tabBar.style.paddingTop = '0px'; tabBar.style.paddingBottom = '0px'; }
  if (tabEl) { tabEl.style.paddingTop = '0px'; tabEl.style.paddingBottom = '0px'; }
  if (footer) footer.style.paddingTop = '0px';
}

function specialGapModeOff() {
  var header = document.querySelector('.app-header');
  var tabBar = document.querySelector('.tab-bar');
  var tabEl = document.getElementById('tab-special');
  var footer = document.querySelector('.app-footer');
  if (header) header.style.paddingBottom = '';
  if (tabBar) { tabBar.style.paddingTop = ''; tabBar.style.paddingBottom = ''; tabBar.style.marginTop = ''; }
  if (footer) { footer.style.paddingTop = ''; footer.style.marginTop = ''; }
  if (tabEl) {
    tabEl.style.paddingTop = '';
    tabEl.style.paddingBottom = '';
    Array.prototype.forEach.call(tabEl.children, function (k) { k.style.marginTop = ''; });
  }
}

function syncSpecialGaps() {
  var tabEl = document.getElementById('tab-special');
  if (!tabEl || !tabEl.classList.contains('active')) return;
  var eyebrow = document.querySelector('.hdr-eyebrow');
  var tabBar = document.querySelector('.tab-bar');
  var footer = document.querySelector('.app-footer');
  if (!eyebrow || !tabBar || !footer) return;

  fitAllCategorySubtitles();

  specialGapModeOn();

  var kids = Array.prototype.filter.call(tabEl.children, function (k) {
    return k.nodeType === 1 && getComputedStyle(k).display !== 'none';
  });

  // Zero every margin first so the measurements below are natural, ungapped
  // heights, not last run's already-gapped ones.
  tabBar.style.marginTop = '0px';
  kids.forEach(function (k) { k.style.marginTop = '0px'; });
  footer.style.marginTop = '0px';

  var viewportH = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  var eyebrowBottom = eyebrow.getBoundingClientRect().bottom;
  var footerH = footer.getBoundingClientRect().height;
  var used = tabBar.getBoundingClientRect().height;
  kids.forEach(function (k) { used += k.getBoundingClientRect().height; });

  // Gap slots: subtitle→tab-bar, tab-bar→1st row, (N-1) between rows, last row→footer = N+2
  var gapCount = kids.length + 2;
  var spaceForGapsAndContent = viewportH - eyebrowBottom - footerH;
  var gap = (spaceForGapsAndContent - used) / gapCount;
  if (!isFinite(gap) || gap < SPECIAL_GAP_MIN) gap = SPECIAL_GAP_MIN;

  // Per-slot fine-tuning: the tab-bar→1st-row slot carries 8px of extra
  // static padding baked into the first category header that the eyebrow→
  // tab-bar slot above it doesn't have, which made it look visually
  // heavier than every other gap. Shave 8px off that one slot and hand it
  // straight back to the 5 between-row slots (+1px each) and the
  // last-row→footer slot (+3px) — offsets net to zero, so the whole-screen
  // fill math above still holds exactly.
  var kidOffsets = kids.map(function (_, i) { return i === 0 ? -8 : 1; });
  var footerOffset = 3;

  function applySpecialGaps(g) {
    tabBar.style.marginTop = g + 'px';
    kids.forEach(function (k, i) { k.style.marginTop = Math.max(SPECIAL_GAP_MIN, g + kidOffsets[i]) + 'px'; });
    footer.style.marginTop = Math.max(SPECIAL_GAP_MIN, g + footerOffset) + 'px';
  }
  applySpecialGaps(gap);

  // Self-correcting pass (same idea as Cardio/Defib): measure where the footer REALLY ended
  // up and spread any leftover/overshoot, so the footer sits exactly on the screen's bottom
  // edge instead of 2-3px past it (which also made Special's footer gap differ from Defib's).
  var fitsHere = (spaceForGapsAndContent - used) / gapCount >= SPECIAL_GAP_MIN;
  if (fitsHere) {
    var bodyPad = parseFloat(getComputedStyle(document.body).paddingBottom) || 0;
    var slack = viewportH - 0.5 - (footer.getBoundingClientRect().bottom + (window.pageYOffset || 0) + bodyPad);
    if (isFinite(slack) && Math.abs(slack) > 0.3) {
      gap = Math.max(SPECIAL_GAP_MIN, gap + slack / gapCount);
      applySpecialGaps(gap);
      slack = viewportH - 0.5 - (footer.getBoundingClientRect().bottom + (window.pageYOffset || 0) + bodyPad);
      if (isFinite(slack) && Math.abs(slack) > 0.3) {   // clamped slots: hand the remainder to the footer slot
        footer.style.marginTop = Math.max(0, parseFloat(footer.style.marginTop) + slack) + 'px';
      }
    }
  }
}

function scheduleSpecialCompactFit() {
  if (specialGapRaf) cancelAnimationFrame(specialGapRaf);
  specialGapRaf = requestAnimationFrame(function () {
    specialGapRaf = null;
    syncSpecialGaps();
  });
}
function fitSpecialCalcCompact() { syncSpecialGaps(); }

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(function () {
    if (typeof scheduleSpecialCompactFit === 'function') scheduleSpecialCompactFit();
  });
}
window.addEventListener('resize', scheduleSpecialCompactFit);
window.addEventListener('orientationchange', scheduleSpecialCompactFit);
window.addEventListener('pageshow', scheduleSpecialCompactFit);
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') scheduleSpecialCompactFit();
});
window.addEventListener('load', function () {
  scheduleSpecialCompactFit();
  setTimeout(scheduleSpecialCompactFit, 350);
  setTimeout(scheduleSpecialCompactFit, 1200);
});
if (window.visualViewport) window.visualViewport.addEventListener('resize', scheduleSpecialCompactFit);
(function observeSpecialLayout() {
  if (!window.ResizeObserver) return;
  function start() {
    var ro = new ResizeObserver(function () { scheduleSpecialCompactFit(); });
    ['.app-header', '.tab-bar', '.app-footer'].forEach(function (s) {
      var el = document.querySelector(s); if (el) ro.observe(el);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

/* ── Cardio/Defib: identical equal-gap "everything fits" layout as Special
   Calc above — same math, applied to #tab-defib's direct children (ECG
   Emergencies, Antihypertensives, AF, WCT/VT, SVT, BLS, Cardioversion cards)
   instead of the category rows. No per-slot offset tuning here since every
   child is a plain .calc-card with identical title-bar padding, unlike
   Special Calc's mixed category-header/standalone-card first row. */
var DEFIB_GAP_MIN = 6;
var DEFIB_TITLE_PAD_CUT_MAX = 7;   // title-bar padding may shrink by at most this many px (11px -> 4px)
var defibGapRaf = null;

function defibGapModeOn() {
  var header = document.querySelector('.app-header');
  var tabBar = document.querySelector('.tab-bar');
  var tabEl = document.getElementById('tab-defib');
  var footer = document.querySelector('.app-footer');
  if (header) header.style.paddingBottom = '0px';
  if (tabBar) { tabBar.style.paddingTop = '0px'; tabBar.style.paddingBottom = '0px'; }
  if (tabEl) { tabEl.style.paddingTop = '0px'; tabEl.style.paddingBottom = '0px'; }
  if (footer) footer.style.paddingTop = '0px';
}

function defibGapModeOff() {
  var header = document.querySelector('.app-header');
  var tabBar = document.querySelector('.tab-bar');
  var tabEl = document.getElementById('tab-defib');
  var footer = document.querySelector('.app-footer');
  if (header) header.style.paddingBottom = '';
  if (tabBar) { tabBar.style.paddingTop = ''; tabBar.style.paddingBottom = ''; tabBar.style.marginTop = ''; }
  if (footer) { footer.style.paddingTop = ''; footer.style.marginTop = ''; }
  if (tabEl) {
    tabEl.style.paddingTop = '';
    tabEl.style.paddingBottom = '';
    Array.prototype.forEach.call(tabEl.children, function (k) {
      k.style.marginTop = ''; k.style.marginBottom = '';
      var tt = k.querySelector(':scope > .calc-title');
      if (tt) { tt.style.paddingTop = ''; tt.style.paddingBottom = ''; }
    });
  }
}

function syncDefibGaps() {
  var tabEl = document.getElementById('tab-defib');
  if (!tabEl || !tabEl.classList.contains('active')) return;
  var eyebrow = document.querySelector('.hdr-eyebrow');
  var tabBar = document.querySelector('.tab-bar');
  var footer = document.querySelector('.app-footer');
  if (!eyebrow || !tabBar || !footer) return;

  defibGapModeOn();

  var kids = Array.prototype.filter.call(tabEl.children, function (k) {
    return k.nodeType === 1 && getComputedStyle(k).display !== 'none';
  });

  // Zero every margin first (both edges — the static CSS gives most cards
  // margin-bottom:0 already but a couple keep 4px) so measurements below are
  // natural, ungapped heights and the JS-computed margin-top is the only
  // source of the visible gap.
  tabBar.style.marginTop = '0px';
  kids.forEach(function (k) { k.style.marginTop = '0px'; k.style.marginBottom = '0px'; });
  footer.style.marginTop = '0px';

  var titles = kids.map(function (k) { return k.querySelector(':scope > .calc-title'); }).filter(Boolean);
  titles.forEach(function (tt) { tt.style.paddingTop = ''; tt.style.paddingBottom = ''; });

  var viewportH = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  var eyebrowBottom = eyebrow.getBoundingClientRect().bottom;
  var footerH = footer.getBoundingClientRect().height;
  function usedHeight() {
    var u = tabBar.getBoundingClientRect().height;
    kids.forEach(function (k) { u += k.getBoundingClientRect().height; });
    return u;
  }

  // Gap slots: subtitle→tab-bar, tab-bar→1st card, (N-1) between cards, last
  // card→footer = N+2, exactly mirroring Special Calc's slot count.
  var gapCount = kids.length + 2;
  var space = viewportH - eyebrowBottom - footerH - 1;   // 1px safety so sub-pixel rounding never causes a 1px scroll
  var gap = (space - usedHeight()) / gapCount;
  var squeezed = false;
  var fallback = false;
  if (!isFinite(gap)) gap = DEFIB_GAP_MIN;

  if (gap < DEFIB_GAP_MIN) {
    // Doesn't fit at the normal minimum gap (short screens, e.g. the S23).
    // Shrink the spacing EQUALLY instead of letting the page scroll:
    // first every gap (down to 0), then the title-bar padding of every card.
    if (gap >= 0) {
      squeezed = true;
    } else if (titles.length) {
      var shortage = -gap * gapCount;                       // px missing with all gaps at 0
      var cut = Math.ceil(shortage / (titles.length * 2) * 10) / 10;
      if (cut <= DEFIB_TITLE_PAD_CUT_MAX) {
        titles.forEach(function (tt) {
          var pad = parseFloat(getComputedStyle(tt).paddingTop) || 11;
          tt.style.paddingTop = (pad - cut) + 'px';
          tt.style.paddingBottom = (pad - cut) + 'px';
        });
        gap = Math.max(0, (space - usedHeight()) / gapCount);
        squeezed = true;
      } else {
        // can't fit even fully squeezed (e.g. ECG sheet expanded) → normal scrolling layout
        gap = DEFIB_GAP_MIN;
        fallback = true;
      }
    } else {
      gap = DEFIB_GAP_MIN;
      fallback = true;
    }
  }

  function applyGaps(g) {
    tabBar.style.marginTop = g + 'px';
    // 5px less above the first card (tab-bar -> "10 ECG Emergencies"), 5px more above the
    // footer; the offset shrinks with the gap so the two always cancel out exactly.
    var floor = squeezed ? 0 : DEFIB_GAP_MIN;
    var d = Math.max(0, Math.min(5, g - floor));
    kids.forEach(function (k, i) { k.style.marginTop = (i === 0 ? g - d : g) + 'px'; });
    footer.style.marginTop = (g + d) + 'px';
  }
  applyGaps(gap);

  // Self-correcting pass: measure where the footer REALLY ended up and spread any leftover
  // (or overshoot) equally over all gap slots. This makes the result independent of whatever
  // made the first estimate wrong (late web-font swap, iOS viewport settling, safe-area
  // padding, etc.), so a fresh load ends up identical to a re-fit after toggling a card.
  if (!fallback) {
    var bodyPad = parseFloat(getComputedStyle(document.body).paddingBottom) || 0;
    var docBottom = footer.getBoundingClientRect().bottom + (window.pageYOffset || 0) + bodyPad;
    var slack = viewportH - 0.5 - docBottom;
    if (isFinite(slack) && Math.abs(slack) > 0.3) {
      gap = Math.max(0, gap + slack / gapCount);
      applyGaps(gap);
    }
  }
}

function scheduleDefibCompactFit() {
  if (defibGapRaf) cancelAnimationFrame(defibGapRaf);
  defibGapRaf = requestAnimationFrame(function () {
    defibGapRaf = null;
    syncDefibGaps();
  });
}
function fitDefibCompact() { syncDefibGaps(); }

window.addEventListener('resize', scheduleDefibCompactFit);
window.addEventListener('orientationchange', scheduleDefibCompactFit);
window.addEventListener('pageshow', scheduleDefibCompactFit);
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') scheduleDefibCompactFit();
});

/* Re-fit whenever anything that feeds the math changes size — this is what makes a cold
   start (web fonts still swapping in, iOS viewport still settling) land on the same equal
   gaps as a manual re-fit, without needing to expand/collapse a card first. */
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(function () { scheduleDefibCompactFit(); });
}
if (document.fonts && document.fonts.addEventListener) {
  document.fonts.addEventListener('loadingdone', function () { scheduleDefibCompactFit(); });
}
window.addEventListener('load', function () {
  scheduleDefibCompactFit();
  setTimeout(scheduleDefibCompactFit, 350);
  setTimeout(scheduleDefibCompactFit, 1200);
});
if (window.visualViewport) window.visualViewport.addEventListener('resize', scheduleDefibCompactFit);
(function observeDefibLayout() {
  if (!window.ResizeObserver) return;
  function start() {
    var tabEl = document.getElementById('tab-defib');
    if (!tabEl) return;
    var ro = new ResizeObserver(function () { scheduleDefibCompactFit(); });
    ['.app-header', '.tab-bar', '.app-footer'].forEach(function (s) {
      var el = document.querySelector(s); if (el) ro.observe(el);
    });
    Array.prototype.forEach.call(tabEl.children, function (k) {
      var tt = k.querySelector(':scope > .calc-title');
      ro.observe(tt || k);          // title bars only: card BODIES changing is handled by toggleCalc
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

/* ── Special Calc: Pin / Favorite system ── */
var SPECIAL_FAV_KEY = 'special-calc-favs-v1';

// Which category each card's *-body slot belongs to, and its order within that
// slot. Cards keep their original markup/IDs/handlers untouched — this only
// controls which container each one gets moved into (and where the "rest" of
// each category lands once a card is unpinned back out of Favourites).
var SPECIAL_LAYOUT = [
  { slot: 'specialcat-scores-body', cards: [
    'calccard-gcs', 'calccard-four', 'calccard-news2', 'calccard-apache',
    'calccard-chadsvasc', 'calccard-childpugh', 'calccard-wellspe', 'calccard-curb65', 'calccard-sofa'
  ] },
  { slot: 'specialcat-criteria-body', cards: [
    'calccard-sepsis3', 'calccard-dic', 'calccard-ards', 'calccard-gold', 'calccard-lights', 'calccard-jones', 'calccard-braindeath', 'calccard-ckd'
  ] },
  { slot: 'specialcat-calculators-body', cards: [
    'calccard-calcium', 'calccard-crcl', 'calccard-renaldose', 'calccard-map', 'calccard-abg', 'calccard-ventcalc', 'calccard-unitconv'
  ] },
  { slot: 'specialcat-correction-body', cards: [
    'calccard-bicarb', 'calccard-kdeficit', 'calccard-nacl', 'calccard-fwd', 'calccard-insulin', 'calccard-heparin', 'calccard-eiw'
  ] },
  { slot: 'specialcat-assessment-body', cards: [
    'calccard-shock', 'calccard-siadh', 'calccard-dka', 'calccard-cbc', 'calccard-ida', 'calccard-hemolysis', 'calccard-thyroid', 'calccard-dengue'
  ] },
  { slot: 'special-standalone-glance', cards: ['calccard-glance'] },
  { slot: 'calccard-glance-body', cards: ['gls-abg', 'gls-vent', 'gls-cbc', 'gls-sepsis', 'gls-abx', 'gls-dengue', 'gls-hbv', 'gls-hgc', 'gls-se', 'gls-pe'] }
];

// Reads a card's own heading text (ignoring icons/badges/nested faint
// sub-labels) so it can be reused to auto-build each category's subtitle.
function getCardShortTitle(card) {
  var header = card.querySelector(':scope > .calc-title, :scope > .gl-sub-header, :scope > .drug-header, :scope > .bolus-header');
  if (!header) return '';
  var span;
  var textHost = header.querySelector('.gl-sub-header-txt');
  if (textHost) {
    var spans = textHost.querySelectorAll(':scope > span');
    span = spans[spans.length - 1];
  } else {
    span = header.querySelector(':scope > span:not(.calc-title-dot):not(.calc-chevron):not(.special-cat-chevron)');
  }
  if (!span) return '';
  var clone = span.cloneNode(true);
  clone.querySelectorAll('span').forEach(function (s) { s.remove(); });
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

// One-word/short-tag override per card, used in the category keyword strip
// only (the card's own on-screen title is untouched). Any card NOT listed
// here falls back to its live title (getCardShortTitle), trailing "Score"
// stripped — so a newly added card still shows *something* sensible until
// a short tag is added for it below.
var CATEGORY_TAG_OVERRIDES = {
  // Scores
  'calccard-sofa': 'SOFA + qSOFA',
  // Assessment
  'calccard-shock': 'Shock',
  'calccard-siadh': 'SIADH/CSW',
  'calccard-dka': 'DKA/HHS',
  'calccard-cbc': 'CBC',
  'calccard-ida': 'IDA',
  'calccard-hemolysis': 'Haemolysis',
  'calccard-thyroid': 'Thyroid',
  'calccard-dengue': 'Dengue HCT',
  // Calculators
  'calccard-calcium': 'Corrected Ca\u00B2\u207A',
  'calccard-crcl': 'CrCl',
  'calccard-renaldose': 'Renal Dose',
  'calccard-abg': 'ABG',
  'calccard-ventcalc': 'Ventilator',
  // Criteria
  'calccard-dic': 'DIC',
  'calccard-ards': 'Berlin ARDS',
  'calccard-gold': 'GOLD',
  'calccard-ckd': 'CKD Staging',
  'calccard-lights': "Light's",
  'calccard-jones': 'Jones',
  // Correction
  'calccard-bicarb': 'NaHCO\u2083',
  'calccard-kdeficit': 'K\u207A deficit',
  'calccard-nacl': '3% NaCl',
  'calccard-fwd': 'Free Water Deficit',
  'calccard-insulin': 'Insulin Dosing',
  'calccard-heparin': 'Heparin Adjustment',
  'calccard-eiw': 'Electrolyte Workup',
  // At a Glance
  'gls-abg': 'ABG Interpretation',
  'gls-vent': 'Ventilator',
  'gls-cbc': 'CBC',
  'gls-sepsis': 'Sepsis Guideline',
  'gls-abx': 'Antibiotic Coverage',
  'gls-dengue': 'Dengue Guideline',
  'gls-hbv': 'HBV Serology',
  'gls-hgc': 'Hyperglycemic Crisis',
  'gls-se': 'Status Epilepticus',
  'gls-pe': 'Pre-eclampsia'
};

// Rebuilds every category's keyword strip from whichever cards are currently
// assigned to that category. Prefers the curated short tag above; falls back
// to the card's own live title (trimmed of a trailing "Score") so a brand
// new card still shows something reasonable before a tag is added for it.
// Builds the dot-separated tag string's HTML, wrapped in an inline "probe"
// span. .special-cat-sub itself is display:block, and getClientRects() only
// fragments into one rect per line for an INLINE box \u2014 on a block element
// it always returns a single rect for the whole box regardless of how many
// lines it wraps to. Measuring the inner inline probe (which shares the same
// available width, since it's laid out inside the block) gives an accurate
// per-line rect count.
//
// When fixedGap is false, the dot\u2192tag gap is a plain (justify-eligible)
// space \u2014 the original look, fine when the subtitle only wraps to 1\u20132 lines
// since there's no repeated line-start position for the eye to compare. When
// fixedGap is true, that gap is replaced with a fixed 4px spacer (see
// .special-cat-sub-gap) so it can never be stretched, used once wrapping
// reaches 3\u20134 lines \u2014 see fitCategorySubtitle().
function renderCategorySubHTML(parts, fixedGap) {
  // Symmetric separator: ' ' + dot + NBSP. Both sides are justifiable word spaces (NBSP also
  // glues the dot to the tag's first word, so it can never be orphaned at a line end), which
  // keeps the dot centred in its gap on every line.
  var gap = '\u00A0';
  var inner = '';
  for (var i = 0; i < parts.length; i++) {
    // Only the tag's own first word needs to stay glued to its leading dot
    // (so the dot never gets orphaned alone at a line end) — any further
    // words in a multi-word tag (e.g. "Antibiotic Coverage") are free to
    // wrap on their own like normal text, so a lone "Coverage" can start
    // the next line instead of dragging the whole tag down with it.
    var sp = parts[i].indexOf(' ');
    var firstWord = sp === -1 ? parts[i] : parts[i].slice(0, sp);
    var rest = sp === -1 ? '' : parts[i].slice(sp + 1);
    if (i === 0) {
      inner += firstWord;
    } else {
      inner += ' <span class="special-cat-sub-dot">\u00A0</span>' + gap + firstWord;
    }
    if (rest) inner += ' ' + rest;
  }
  return '<span class="special-cat-sub-probe">' + inner + '</span>';
}

// Re-renders one .special-cat-sub against its actual current wrap once the
// element is visible/measurable: locks the dot\u2192tag gap to a fixed 4px
// once wrapping reaches 3+ lines (font size itself stays fixed at 10.5px \u2014
// see .special-cat-sub \u2014 no longer auto-shrunk on long wraps).
function fitCategorySubtitle(subEl) {
  var parts = subEl.__subParts;
  if (!parts || parts.length < 2) return;

  subEl.innerHTML = renderCategorySubHTML(parts, false);
  var probe = subEl.firstElementChild;
  if (!probe || probe.getClientRects().length === 0) return; // not laid out/visible yet
  var lines = probe.getClientRects().length;

  if (lines >= 3) {
    subEl.innerHTML = renderCategorySubHTML(parts, true);
  }
}

function fitAllCategorySubtitles() {
  document.querySelectorAll('.special-cat-sub').forEach(fitCategorySubtitle);
}

function updateCategorySubtitles() {
  SPECIAL_LAYOUT.forEach(function (group) {
    var isCategory = group.slot.indexOf('specialcat-') === 0;
    var isGlanceBody = group.slot === 'calccard-glance-body';
    if (!isCategory && !isGlanceBody) return;
    var hostId = isCategory ? group.slot.replace('-body', '') : 'calccard-glance';
    var hostEl = document.getElementById(hostId);
    if (!hostEl) return;
    var subEl = hostEl.querySelector(':scope > .special-cat-header .special-cat-sub, :scope > .calc-title .special-cat-sub');
    if (!subEl) return;
    var names = group.cards.map(function (id) {
      if (CATEGORY_TAG_OVERRIDES.hasOwnProperty(id)) return CATEGORY_TAG_OVERRIDES[id];
      var card = document.getElementById(id);
      if (!card) return '';
      return getCardShortTitle(card).replace(/\s+Score$/i, '');
    }).filter(Boolean);
    var joined = names.join(' \u29BF ');
    subEl.setAttribute('data-base', joined);
    // Render with an oversized separator dot (readable at a glance) while
    // the keyword text itself stays small — a plain textContent join can't
    // size the dot differently, so build it as escaped HTML instead. Only a
    // tag's own hyphen is turned unbreakable (\u2011) so a compound token like
    // "Sepsis-3" never splits mid-word; a tag's internal spaces stay real
    // (breakable) spaces — renderCategorySubHTML() glues just the dot to the
    // tag's first word, so a multi-word tag like "Antibiotic Coverage" can
    // still wrap between its own words once on the line.
    var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
    var glueTag = function (s) { return esc(s).replace(/-/g, '\u2011'); };
    var parts = names.map(glueTag);
    // Stash for fitCategorySubtitle() to re-render against once this element
    // is actually visible/measurable (it may not be yet \u2014 e.g. Special Calc
    // isn't the active tab on first load).
    subEl.__subParts = parts;
    subEl.style.removeProperty('--sub-fs');
    subEl.innerHTML = renderCategorySubHTML(parts, false);
  });
}

function getFavoriteCalcs() {
  try {
    var raw = localStorage.getItem(SPECIAL_FAV_KEY);
    var arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function setFavoriteCalcs(arr) {
  try { localStorage.setItem(SPECIAL_FAV_KEY, JSON.stringify(arr)); } catch (e) {}
}

function toggleFavoriteCalc(cid, btn) {
  var favs = getFavoriteCalcs();
  var idx = favs.indexOf(cid);
  if (idx === -1) {
    favs.push(cid); // newly pinned joins at the end of the pinned group
  } else {
    favs.splice(idx, 1); // unpin
  }
  setFavoriteCalcs(favs);
  applyFavoriteCalcs();
}

function toggleSpecialCat(catId) {
  var cat = document.getElementById(catId);
  if (!cat) return;
  var body = cat.querySelector('.special-cat-body');
  if (!body) return;
  var isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  cat.classList.toggle('is-open', !isOpen);
  if (typeof scheduleSpecialCompactFit === 'function') scheduleSpecialCompactFit();
}

function applyFavoriteCalcs() {
  var tabEl = document.getElementById('tab-special');
  if (!tabEl) return;
  var favs = getFavoriteCalcs();
  var favSet = {};
  favs.forEach(function (id) { favSet[id] = true; });

  // Sync every pin button's visual state + card highlight
  tabEl.querySelectorAll('.calc-pin').forEach(function (btn) {
    var cid = btn.getAttribute('data-cid');
    var isFav = !!favSet[cid];
    var icon = btn.querySelector('.calc-pin-icon');
    if (icon) icon.textContent = '\u2606';
    btn.classList.toggle('pinned', isFav);
    btn.title = isFav ? 'Unpin' : 'Pin to top';
    var card = document.getElementById(cid);
    if (card) card.classList.toggle('is-pinned', isFav);
  });

  // Pinned cards → the Pinned strip at the very top, in pin order, always above
  // every category regardless of which category they natively belong to.
  var pinnedBody = document.getElementById('special-pinned-body');
  var pinnedWrap = document.getElementById('special-pinned-wrap');
  if (pinnedBody) {
    favs.forEach(function (id) {
      var card = document.getElementById(id);
      if (card) pinnedBody.appendChild(card);
    });
  }
  if (pinnedWrap) pinnedWrap.style.display = favs.length ? '' : 'none';

  // Every non-pinned card → its home slot (category body, or a standalone slot
  // for Syringe Pump / At a Glance), in that slot's defined order. Doing a full
  // rebuild every time means unpinning snaps a card straight back to its correct
  // place instantly, without needing a reload — same behaviour as before.
  SPECIAL_LAYOUT.forEach(function (group) {
    var slotEl = document.getElementById(group.slot);
    if (!slotEl) return;
    group.cards.forEach(function (id) {
      if (favSet[id]) return;
      var card = document.getElementById(id);
      if (card) slotEl.appendChild(card);
    });
  });

  // Category item counts (reflects how many of each category's cards are
  // currently sitting in that category, i.e. excludes any pinned away).
  SPECIAL_LAYOUT.forEach(function (group) {
    if (group.slot.indexOf('specialcat-') !== 0 && group.slot !== 'calccard-glance-body') return;
    var countEl = document.getElementById(group.slot.replace('-body', '-count'));
    if (!countEl) return;
    var n = group.cards.filter(function (id) { return !favSet[id]; }).length;
    countEl.textContent = n;
  });

  updateCategorySubtitles();
  if (typeof scheduleSpecialCompactFit === 'function') scheduleSpecialCompactFit();
}

applyFavoriteCalcs();
try { hgInit(); } catch(e) {}

/* ── Footer: equalize the two text-line widths exactly ── */
(function () {
  var _twCanvas = null;
  function textWidth(text, font) {
    _twCanvas = _twCanvas || document.createElement('canvas');
    var ctx = _twCanvas.getContext('2d');
    ctx.font = font;
    return ctx.measureText(text).width;
  }
  function fontOf(el, sizePx) {
    var cs = getComputedStyle(el);
    return cs.fontStyle + ' ' + cs.fontWeight + ' ' + (sizePx != null ? sizePx : parseFloat(cs.fontSize)) + 'px ' + cs.fontFamily;
  }
  function equalizeFooterLines() {
    var line1 = document.getElementById('ftLine1');
    var line2 = document.getElementById('ftLine2');
    var shrink = document.getElementById('ftShrink');
    var normal = document.getElementById('ftNormal');
    if (!line1 || !line2 || !shrink || !normal) return;

    var baseSize = 9; // ft-line2's default font-size
    line2.style.fontSize = baseSize + 'px';

    // Line 1 must stay on ONE line: shrink its font if the (smaller) separators still
    // don't fit, then measure the line as actually rendered.
    line1.style.whiteSpace = 'nowrap';
    line1.style.fontSize = '9px';
    var _cw = line1.parentElement ? line1.parentElement.clientWidth : 0;
    function _l1w() {
      try {
        var _rg = document.createRange();
        _rg.selectNodeContents(line1);
        return _rg.getBoundingClientRect().width;
      } catch (e) { return 0; }
    }
    var target = _l1w();
    if (_cw && target > _cw) {
      line1.style.fontSize = Math.max(6, 9 * _cw / target * 0.98).toFixed(2) + 'px';
      target = _l1w();
    }
    if (!target) target = textWidth(line1.textContent, fontOf(line1));
    var gapNatural = baseSize * 0.35; // matches #ftNormal's margin-left: 0.35em at baseSize
    var shrinkWidth = textWidth(shrink.textContent, fontOf(shrink, baseSize));
    var normalWidth = textWidth(normal.textContent, fontOf(normal, baseSize));
    var naturalTotal = shrinkWidth + gapNatural + normalWidth;

    var container = line1.parentElement; // .footer-text
    var maxAvailable = container ? container.clientWidth : target;
    var usableTarget = Math.min(target, maxAvailable);

    if (naturalTotal > 0) {
      var scale = usableTarget / naturalTotal;
      var newSize = Math.max(6, Math.min(16, baseSize * scale));
      line2.style.fontSize = newSize.toFixed(2) + 'px';
    }
  }
  function runWhenReady() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(equalizeFooterLines);
    } else {
      equalizeFooterLines();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady);
  } else {
    runWhenReady();
  }
  var _rzTimer;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer);
    _rzTimer = setTimeout(equalizeFooterLines, 150);
  });
})();

/* ── ECG sheet pager ──
   Default: first 5 rows. Swipe up -> top 5 slide away, last 5 slide in (swipe down reverses).
   Tap: expand to all 10 (tap again -> back to the 5-row page you were on). */
(function () {
  var W = 783;                     // SVG viewBox width
  var PAGE_A = [0, 504.2];         // rows 1-5  (viewBox y-range)
  var PAGE_B = [502.8, 990.5];     // rows 6-10
  var FULL   = [0, 990.5];         // all 10
  var wrap, svg, lastW = 0, drag = null, suppressUntil = 0;
  var st = { open: false, page: 0, prev: 0 };

  function range() { return st.open ? FULL : (st.page ? PAGE_B : PAGE_A); }
  function scale() { return wrap.clientWidth / W; }
  function apply(animate) {
    var w = wrap.clientWidth;
    if (!w) return;
    var s = w / W, r = range();
    if (animate) wrap.classList.add('ecg-anim');
    else { wrap.classList.remove('ecg-anim'); }
    wrap.style.height = ((r[1] - r[0]) * s) + 'px';
    svg.style.transform = 'translate3d(0,' + (-r[0] * s) + 'px,0)';
    lastW = w;
  }
  function refit() {
    setTimeout(function () { if (typeof scheduleDefibCompactFit === 'function') scheduleDefibCompactFit(); }, 430);
  }
  function toggleOpen() {
    if (!st.open) { st.prev = st.page; st.open = true; apply(true); refit(); }
    else {
      st.open = false; st.page = st.prev || 0; apply(true); refit();
      var top = wrap.getBoundingClientRect().top;
      var card = document.getElementById('calccard-ecgemerg');
      if (top < 0 && card && card.scrollIntoView) card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
  function init() {
    wrap = document.getElementById('ecgEmergImgWrap');
    svg = document.getElementById('ecgEmergSvg');
    if (!wrap || !svg) return;
    apply(false);

    wrap.addEventListener('click', function () {
      if (Date.now() < suppressUntil) return;
      toggleOpen();
    });

    wrap.addEventListener('touchstart', function (e) {
      if (st.open || e.touches.length !== 1) { drag = null; return; }
      var t = e.touches[0];
      drag = { x: t.clientX, y: t.clientY, t: Date.now(), decided: false, active: false, dy: 0 };
    }, { passive: true });

    wrap.addEventListener('touchmove', function (e) {
      if (!drag) return;
      var t = e.touches[0], dx = t.clientX - drag.x, dy = t.clientY - drag.y;
      if (!drag.decided) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        drag.decided = true;
        var vertical = Math.abs(dy) > Math.abs(dx) * 1.2;
        // only hijack the gesture when it can actually change page; otherwise the page scrolls normally
        drag.active = vertical && ((st.page === 0 && dy < 0) || (st.page === 1 && dy > 0));
        if (drag.active) wrap.classList.remove('ecg-anim');
      }
      if (!drag.active) return;
      if (e.cancelable) e.preventDefault();
      var s = scale(), D = (PAGE_B[0] - PAGE_A[0]) * s;
      var off = st.page === 0 ? Math.max(-D, Math.min(0, dy)) : Math.max(0, Math.min(D, dy));
      drag.dy = dy;
      svg.style.transform = 'translate3d(0,' + (-range()[0] * s + off) + 'px,0)';
    }, { passive: false });

    function end(e) {
      if (!drag) return;
      var d = drag; drag = null;
      if (!d.active) return;
      suppressUntil = Date.now() + 450;
      var adx = Math.abs(d.dy), v = adx / (Date.now() - d.t + 1);
      var commit = e.type !== 'touchcancel' && (adx > 50 || (adx > 20 && v > 0.5));
      if (commit) st.page = st.page ? 0 : 1;
      apply(true);
    }
    wrap.addEventListener('touchend', end);
    wrap.addEventListener('touchcancel', end);

    if (window.ResizeObserver) {
      new ResizeObserver(function () {
        if (wrap.clientWidth !== lastW) apply(false);
      }).observe(wrap);
    }
    window.addEventListener('resize', function () { apply(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ── "7 ECG Emergencies" card: keep title + caption on one line ── */
(function () {
  var _twCanvas2 = null;
  function textWidth(text, font) {
    _twCanvas2 = _twCanvas2 || document.createElement('canvas');
    var ctx = _twCanvas2.getContext('2d');
    ctx.font = font;
    return ctx.measureText(text).width;
  }
  function fontOf(el, sizePx) {
    var cs = getComputedStyle(el);
    return cs.fontStyle + ' ' + cs.fontWeight + ' ' + (sizePx != null ? sizePx : parseFloat(cs.fontSize)) + 'px ' + cs.fontFamily;
  }
  function fitEcgTitle() {
    var title = document.querySelector('#calccard-ecgemerg .calc-title');
    var dot = title && title.querySelector('.calc-title-dot');
    var chevron = document.getElementById('ecgemerg-chevron');
    var main = document.getElementById('ecgemerg-maintext');
    var caption = document.getElementById('ecgemerg-caption');
    if (!title || !dot || !chevron || !main || !caption) return;

    var baseSize = 11; // matches .calc-title's actual font-size
    caption.style.fontSize = baseSize + 'px';

    var cs = getComputedStyle(title);
    var padL = parseFloat(cs.paddingLeft) || 0;
    var padR = parseFloat(cs.paddingRight) || 0;
    var gap = parseFloat(cs.gap) || 8;
    var available = title.clientWidth - padL - padR - dot.getBoundingClientRect().width - chevron.getBoundingClientRect().width - gap * 2 - 2;

    var mainWidth = textWidth(main.textContent, fontOf(main));
    var captionNatural = textWidth(caption.textContent, fontOf(caption, baseSize));
    var availableForCaption = available - mainWidth;

    if (availableForCaption > 0 && captionNatural > 0) {
      var scale = availableForCaption / captionNatural;
      var newSize = Math.max(8, Math.min(baseSize, baseSize * scale));
      caption.style.fontSize = newSize.toFixed(2) + 'px';
    }
  }
  function runWhenReady2() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitEcgTitle);
    } else {
      fitEcgTitle();
    }
  }
  window.fitEcgTitle = fitEcgTitle;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady2);
  } else {
    runWhenReady2();
  }
  var _rzTimer2;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer2);
    _rzTimer2 = setTimeout(fitEcgTitle, 150);
  });
})();

/* ── Header title: keep "Bedside Critical Assessment & Measures" on one line ── */
(function () {
  var _twCanvas3 = null;
  function textWidth(text, font) {
    _twCanvas3 = _twCanvas3 || document.createElement('canvas');
    var ctx = _twCanvas3.getContext('2d');
    ctx.font = font;
    return ctx.measureText(text).width;
  }
  function fitHeaderTitle() {
    var title = document.getElementById('hdrTitle');
    var header = document.querySelector('.app-header');
    if (!title || !header) return;

    title.style.fontSize = '';
    var cs = getComputedStyle(title);
    var baseSize = parseFloat(cs.fontSize);
    var font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + baseSize + 'px ' + cs.fontFamily;

    var hcs = getComputedStyle(header);
    var padL = parseFloat(hcs.paddingLeft) || 0;
    var padR = parseFloat(hcs.paddingRight) || 0;
    var gap = parseFloat(hcs.gap || hcs.columnGap) || 0;
    var btn = document.getElementById('gsHandle');
    var btnW = btn ? btn.offsetWidth : 0;
    var available = header.clientWidth - padL - padR - gap - btnW - 4;

    var natural = textWidth(title.textContent, font);
    if (natural > available && natural > 0) {
      var scale = available / natural;
      var newSize = Math.max(11, baseSize * scale);
      title.style.fontSize = newSize.toFixed(2) + 'px';
    }
  }
  function runWhenReady3() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitHeaderTitle);
    } else {
      fitHeaderTitle();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady3);
  } else {
    runWhenReady3();
  }
  var _rzTimer3;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer3);
    _rzTimer3 = setTimeout(fitHeaderTitle, 150);
  });
})();

/* ── Drug name + brand-name (bracket text): force one line, never wrap ── */
(function () {
  function isWrapped(el) {
    var lh = parseFloat(getComputedStyle(el).lineHeight);
    if (!lh || isNaN(lh)) lh = parseFloat(getComputedStyle(el).fontSize) * 1.2;
    return el.scrollHeight > lh * 1.4; // more than ~1 line's height => wrapped
  }
  function fitOneDrugName(nameEl) {
    var brand = nameEl.querySelector('.brand-name');
    if (!brand) return;
    if (!brand.dataset.origFontPx) {
      // capture the ORIGINAL intended size (inline style or CSS default) once, before any shrinking
      brand.dataset.origFontPx = parseFloat(getComputedStyle(brand).fontSize);
    }
    var origSize = parseFloat(brand.dataset.origFontPx);
    brand.style.fontSize = origSize + 'px'; // restore to original baseline first
    var attempts = 0;
    var size = origSize;
    var floor = 6.5;
    while (isWrapped(nameEl) && size > floor && attempts < 30) {
      size = Math.max(floor, size * 0.94);
      brand.style.fontSize = size.toFixed(2) + 'px';
      attempts++;
    }
  }
  function fitAllDrugNames() {
    document.querySelectorAll('.drug-name:not([data-nofit])').forEach(fitOneDrugName);
  }
  // Align every calculator sub-card's left edge and width to exactly where a
  // card's own title text starts and how far its first line runs (e.g. up to
  // "…Weaning" before it wraps to "& Oxygenation"). Both are measured live
  // off the real rendered title, not hand-calculated from the title's
  // padding/icon/gap CSS values — a hard-coded offset kept being slightly
  // wrong against actual rendering, so this reads the true position/width
  // directly instead of trying to re-derive it.
  // Shared by every card that wants its sub-cards flush with its own title
  // (currently Ventilator Calculator and Unit Converter) rather than
  // duplicating this per card.
  function alignSubCardWidth(cardId) {
    var card = document.getElementById(cardId);
    if (!card) return;
    var body = card.querySelector(':scope > .calc-body');
    var titleTextEl = card.querySelector('.calc-title > span:not(.calc-title-dot)');
    if (!titleTextEl || !body) return;
    var range = document.createRange();
    range.selectNodeContents(titleTextEl);
    var rects = range.getClientRects();
    if (rects.length === 0) return;
    // The title text is split across two inline elements (the muted
    // "— Mechanics…"/"— Bidirectional…" portion is its own nested <span>),
    // so getClientRects() returns a separate rect at that element boundary
    // even when both runs sit on the same visual line — trusting rects[0]
    // alone only measures the bold lead-in and cuts the box far too narrow.
    // Instead, group every rect that shares line 1's vertical position and
    // take their combined left-to-right span as the true first-line width.
    var lineTop = rects[0].top;
    var left = Infinity, right = -Infinity;
    for (var i = 0; i < rects.length; i++) {
      if (Math.abs(rects[i].top - lineTop) < 2) {
        left = Math.min(left, rects[i].left);
        right = Math.max(right, rects[i].right);
      }
    }
    var firstLineWidth = right - left;
    var cardLeft = card.getBoundingClientRect().left;
    var textLeftOffset = left - cardLeft;
    // Sanity floor: legitimate values here should never be this small on any
    // real device. If measurement ever misfires again, fail open (leave the
    // previous/default styling) rather than silently collapsing every
    // calculator into an unusable narrow or misaligned column.
    // Applied directly on the elements (not via a CSS custom property) so
    // there's no inheritance/cascade indirection that could silently fail.
    if (textLeftOffset > 10) body.style.paddingLeft = textLeftOffset + 'px';
    if (firstLineWidth > 150) {
      body.querySelectorAll(':scope > .ucv-sub-card').forEach(function (sc) {
        sc.style.maxWidth = firstLineWidth + 'px';
      });
    }
  }
  function vcAlignContentWidth() { alignSubCardWidth('calccard-ventcalc'); }
  function ucvAlignContentWidth() { alignSubCardWidth('calccard-unitconv'); }
  function alignAllSubCardWidths() {
    vcAlignContentWidth();
    ucvAlignContentWidth();
  }
  window.addEventListener('load', function () { setTimeout(alignAllSubCardWidths, 150); });
  window.addEventListener('resize', alignAllSubCardWidths);
  function runWhenReady4() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitAllDrugNames);
      document.fonts.ready.then(alignAllSubCardWidths);
    } else {
      fitAllDrugNames();
    }
  }
  window.fitAllDrugNames = fitAllDrugNames;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady4);
  } else {
    runWhenReady4();
  }
  var _rzTimer4;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer4);
    _rzTimer4 = setTimeout(fitAllDrugNames, 150);
  });
  // Exposed globally: toggleCalc() and the tab-switch handler call these by
  // name via `typeof ... === 'function'` checks from outside this IIFE, so
  // without this they'd silently no-op (typeof on an out-of-scope name is
  // just 'undefined', not an error) — the accordion-open and tab-switch
  // recalculation triggers would quietly never fire. The window-load/resize/
  // fonts.ready listeners above already call them directly by reference and
  // don't need this, but those alone can miss a resize-free layout shift
  // (e.g. opening the accordion after fonts/layout already settled).
  window.vcAlignContentWidth = vcAlignContentWidth;
  window.ucvAlignContentWidth = ucvAlignContentWidth;
  window.alignAllSubCardWidths = alignAllSubCardWidths;
})();

/* ══════════ Syringe Pump Dose Calculator (embedded) JS ══════════ */
function toggleTerminal(){
  const wrap = document.getElementById('terminalWrap');
  const row = document.getElementById('terminalToggle');
  const isOpen = wrap.classList.toggle('open');
  row.classList.toggle('open', isOpen);
}

/* ============ DRUG DATABASE ============ */
/* amt/amtU/vol = default concentration; doseU/lo/hi = default dose unit + usual adult range in that unit */
const DRUGS = [
  // Vasopressors / Inotropes
  {id:'norepi',   name:'Norepinephrine (Noradrenaline)', cat:'Vasopressor/Inotrope', amt:4,   amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:0.02, hi:1,    rangeNote:'Usual adult range: 0.02–0.5 mcg/kg/min, up to 1.0 mcg/kg/min — verify local protocol.', note:'Titrate to MAP ≥65 mmHg. May be initiated peripherally (large vein, short duration, close monitoring) under an appropriate safety protocol; central access preferred for ongoing/prolonged infusion.'},
  {id:'epi',      name:'Epinephrine (Adrenaline)',        cat:'Vasopressor/Inotrope', amt:4,   amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:0.01, hi:2,    note:'Increases myocardial O₂ demand; watch for tachyarrhythmia.'},
  {id:'dopamine', name:'Dopamine',                        cat:'Vasopressor/Inotrope', amt:400, amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:2,    hi:20,   note:'"Renal-dose" dopamine is not evidence-based.'},
  {id:'dobutamine',name:'Dobutamine',                     cat:'Vasopressor/Inotrope', amt:250, amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:2.5,  hi:20,   note:'May cause tachycardia/arrhythmia; a pure inotrope, not a pressor.'},
  {id:'vasopressin',name:'Vasopressin',                   cat:'Vasopressor/Inotrope', amt:20,  amtU:'units',vol:50, doseU:'units/min',  lo:0.01, hi:0.04, note:'Fixed-rate, not weight-based. Usually adjunct to norepinephrine.'},
  {id:'phenylephrine',name:'Phenylephrine',                cat:'Vasopressor/Inotrope', amt:10,  amtU:'mg',   vol:50, doseU:'mcg/min',    lo:10,   hi:200,  note:'Pure alpha-1 agonist; can cause reflex bradycardia.'},
  {id:'milrinone',name:'Milrinone',                        cat:'Vasopressor/Inotrope', amt:20,  amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:0.125,hi:0.75, note:'Vasodilator + inotrope; reduce/avoid in renal impairment.'},

  // Antiarrhythmics / Antihypertensives
  {id:'amiodarone',name:'Amiodarone (maintenance)',        cat:'Antiarrhythmic',       amt:900, amtU:'mg',   vol:500, doseU:'mg/min',     lo:0.5,  hi:1,    note:'900mg in 500ml D5W (1.8mg/ml) — FDA-labelled safe range 1–6mg/ml, >2mg/ml requires central line. Loading 150 mg over 10 min given separately, then this maintenance infusion.'},
  {id:'lidocaine',name:'Lidocaine',                        cat:'Antiarrhythmic',       amt:2,   amtU:'g',    vol:50, doseU:'mg/min',     lo:1,    hi:4,    note:'Reduce dose in hepatic failure or low cardiac output.'},
  {id:'esmolol',  name:'Esmolol',                          cat:'Antihypertensive',     amt:2500,amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:50,   hi:200,  note:'Loading bolus 500 mcg/kg over 1 min usually precedes infusion.'},
  {id:'labetalol',name:'Labetalol',                        cat:'Antihypertensive',     amt:200, amtU:'mg',   vol:50, doseU:'mg/hr',      lo:2,    hi:8,    note:'Avoid in reactive airway disease/decompensated HF.'},
  {id:'nicardipine',name:'Nicardipine',                    cat:'Antihypertensive',     amt:25,  amtU:'mg',   vol:50, doseU:'mg/hr',      lo:5,    hi:15,   note:'Titrate every 5–15 min; avoid extravasation (vesicant).'},
  {id:'diltiazem',name:'Diltiazem',                        cat:'Antihypertensive',     amt:125, amtU:'mg',   vol:50, doseU:'mg/hr',      lo:5,    hi:15,   note:'Often preceded by 0.25 mg/kg IV bolus for rate control.'},
  {id:'ntg',      name:'Nitroglycerin (GTN)',              cat:'Antihypertensive',     amt:50,  amtU:'mg',   vol:50, doseU:'mcg/min',    lo:5,    hi:200,  note:'Tolerance with prolonged use; use non-PVC tubing/glass bottle.'},
  {id:'snp',      name:'Sodium Nitroprusside',             cat:'Antihypertensive',     amt:50,  amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:0.3,  hi:10,   note:'Cyanide/thiocyanate toxicity risk at high dose/prolonged use; protect from light.'},

  // Sedation / Analgesia
  {id:'midazolam',name:'Midazolam',                        cat:'Sedation/Analgesia',   amt:50,  amtU:'mg',   vol:50,  doseU:'mg/hr',      lo:1,    hi:10,   note:'Accumulates in renal/hepatic failure and obesity — risk of prolonged sedation.'},
  {id:'propofol', name:'Propofol',                         cat:'Sedation/Analgesia',   amt:500, amtU:'mg',   vol:50,  doseU:'mcg/kg/min', lo:5,    hi:50,   note:'Watch for Propofol Infusion Syndrome with high-dose/prolonged use.'},
  {id:'fentanyl', name:'Fentanyl',                          cat:'Sedation/Analgesia',   amt:2500,amtU:'mcg',  vol:50,  doseU:'mcg/hr',     lo:25,   hi:200,  note:'Titrate to validated pain/sedation scale (e.g. CPOT, RASS).'},
  {id:'morphine', name:'Morphine',                          cat:'Sedation/Analgesia',   amt:50,  amtU:'mg',   vol:50,  doseU:'mg/hr',      lo:1,    hi:10,   note:'Active metabolites accumulate in renal failure.'},
  {id:'dexmed',   name:'Dexmedetomidine',                   cat:'Sedation/Analgesia',   amt:400, amtU:'mcg',  vol:50, doseU:'mcg/kg/hr',  lo:0.2,  hi:1.5,  note:'No loading dose typically used in ICU sedation; watch for bradycardia/hypotension.'},
  {id:'ketamine', name:'Ketamine (sedation infusion)',      cat:'Sedation/Analgesia',   amt:500, amtU:'mg',   vol:50,  doseU:'mg/kg/hr',   lo:0.1,  hi:0.5,  note:'Sub-dissociative analgesic doses are lower; monitor for emergence reactions.'},

  // Neuromuscular Blockers
  {id:'cisatracurium',name:'Cisatracurium',                 cat:'Neuromuscular Blocker',amt:200, amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:1,    hi:3,    note:'Organ-independent (Hofmann) elimination. Monitor train-of-four; ensure adequate sedation.'},
  {id:'atracurium',name:'Atracurium',                        cat:'Neuromuscular Blocker',amt:500, amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:4,    hi:12,   note:'Can cause histamine release. Monitor train-of-four.'},
  {id:'vecuronium',name:'Vecuronium',                        cat:'Neuromuscular Blocker',amt:20,  amtU:'mg',   vol:50, doseU:'mcg/kg/min', lo:0.8,  hi:1.7,  note:'Renal/hepatic clearance — prolonged block possible in organ failure.'},
  {id:'rocuronium',name:'Rocuronium (infusion)',             cat:'Neuromuscular Blocker',amt:500, amtU:'mg',   vol:50,  doseU:'mcg/kg/min', lo:10,   hi:12,   note:'More often used as intermittent bolus; infusion less common.'},

  // Anticoagulation / Endocrine / Other
  {id:'heparin',  name:'Unfractionated Heparin',            cat:'Anticoagulation',      amt:25000,amtU:'units',vol:50, doseU:'units/kg/hr', lo:12,  hi:18,   note:'Check aPTT/anti-Xa per protocol (e.g. q6h until stable).'},
  {id:'insulin',  name:'Regular Insulin',                    cat:'Endocrine',            amt:100, amtU:'units',vol:50, doseU:'units/hr',    lo:1,   hi:10,   note:'Titrate per glucose protocol; check capillary glucose hourly initially.'},
  {id:'octreotide',name:'Octreotide',                        cat:'GI/Endocrine',         amt:500, amtU:'mcg',  vol:50, doseU:'mcg/hr',      lo:25,  hi:50,   note:'Used for variceal bleeding and high-output GI fistulae.'},
  {id:'terlipressin',name:'Terlipressin (continuous)',       cat:'GI/Endocrine',         amt:2,   amtU:'mg',   vol:50,  doseU:'mg/hr',       lo:0.04,hi:0.17, note:'Continuous infusion reduces bolus-related ischaemic side-effects vs bolus dosing.'},
  {id:'furosemide',name:'Furosemide (infusion)',             cat:'Diuretic',             amt:250, amtU:'mg',   vol:50,  doseU:'mg/hr',       lo:1,   hi:20,   note:'A loading bolus is often given before starting the infusion.'},
  {id:'magnesium',name:'Magnesium Sulfate',                  cat:'Electrolyte',          amt:4,   amtU:'g',    vol:50,  doseU:'g/hr',        lo:0.5, hi:2,    note:'Monitor deep tendon reflexes, respiratory rate and renal function at higher doses.'},
  {id:'kcl',      name:'Potassium Chloride',                 cat:'Electrolyte',          amt:40,  amtU:'mEq',  vol:50, doseU:'mEq/hr',      lo:5,   hi:20,   note:'Max peripheral rate usually ~10 mEq/hr; higher rates need central line + cardiac monitoring.'},
  {id:'bicarb',   name:'Sodium Bicarbonate',                 cat:'Electrolyte',          amt:150, amtU:'mEq',  vol:50,doseU:'mEq/hr',      lo:10,  hi:40,   note:'Used for severe metabolic acidosis / urine alkalinisation; avoid extravasation.'},

  {id:'custom',   name:'Custom / Other Drug',                cat:'Custom',               amt:null,amtU:'mg',   vol:null,doseU:'mcg/kg/min', lo:null,hi:null, note:'Enter the concentration and dose manually for any drug not listed.'},
];


const DOSE_OPTIONS = {
  mass:  ['mcg/kg/min','mcg/kg/hr','mcg/min','mcg/hr','mg/kg/min','mg/kg/hr','mg/min','mg/hr','g/hr'],
  units: ['units/kg/hr','units/hr','units/kg/min','units/min'],
  mEq:   ['mEq/kg/hr','mEq/hr','mEq/min'],
};
const CONC_UNIT_OPTIONS = { mass: ['mcg','mg','g'], units: ['units'], mEq: ['mEq'] };

let currentMode = 'dose';

/* ============ CORE MATH (verified) ============ */
function familyOf(unit){
  if(['mcg','mg','g'].includes(unit)) return 'mass';
  if(unit === 'units') return 'units';
  if(unit === 'mEq') return 'mEq';
  throw new Error('Unrecognised unit: ' + unit);
}
function toBaseAmount(value, unit){
  if(unit === 'g')   return { value: value*1e6,  family:'mass'  };
  if(unit === 'mg')  return { value: value*1000, family:'mass'  };
  if(unit === 'mcg') return { value: value,      family:'mass'  };
  if(unit === 'units') return { value: value,    family:'units' };
  if(unit === 'mEq') return { value: value,      family:'mEq'   };
  throw new Error('Unrecognised unit: ' + unit);
}
function fromBaseAmount(baseValue, family, targetUnit){
  if(family === 'mass'){
    if(targetUnit === 'g') return baseValue/1e6;
    if(targetUnit === 'mg') return baseValue/1000;
    if(targetUnit === 'mcg') return baseValue;
  }
  return baseValue;
}
function parseDoseUnit(str){
  const tokens = str.split('/');
  return { amountUnit: tokens[0], perKg: tokens.includes('kg'), timeUnit: tokens[tokens.length-1] };
}
function calcRateFromDose(doseVal, doseUnit, weight, concAmount, concUnit, concVol){
  const d = parseDoseUnit(doseUnit);
  if(d.perKg && !(weight > 0)) throw new Error('WEIGHT_REQUIRED');
  let perHour = doseVal;
  if(d.perKg) perHour *= weight;
  if(d.timeUnit === 'min') perHour *= 60;
  const doseBase = toBaseAmount(perHour, d.amountUnit);
  const concBase = toBaseAmount(concAmount, concUnit);
  if(doseBase.family !== concBase.family) throw new Error('FAMILY_MISMATCH');
  const concPerMl = concBase.value / concVol;
  const mlPerHour = doseBase.value / concPerMl;
  return { mlPerHour, doseBasePerHour: doseBase.value, family: doseBase.family, concPerMl, parsed: d, perHour };
}
function calcDoseFromRate(mlPerHour, doseUnit, weight, concAmount, concUnit, concVol){
  const d = parseDoseUnit(doseUnit);
  if(d.perKg && !(weight > 0)) throw new Error('WEIGHT_REQUIRED');
  const concBase = toBaseAmount(concAmount, concUnit);
  const concPerMl = concBase.value / concVol;
  let baseAmountPerHour = mlPerHour * concPerMl;
  let doseVal = fromBaseAmount(baseAmountPerHour, concBase.family, d.amountUnit);
  if(d.timeUnit === 'min') doseVal /= 60;
  if(d.perKg) doseVal /= weight;
  return { doseVal, parsed: d, concPerMl, baseAmountPerHour };
}

/* ============ FORMATTING ============ */
function fmt(n){
  if(n === null || n === undefined || isNaN(n)) return '—';
  if(Math.abs(n) >= 100) return (Math.round(n*100)/100).toString();
  if(Math.abs(n) >= 1) return (Math.round(n*1000)/1000).toString();
  return parseFloat(n.toPrecision(4)).toString();
}

/* ============ UI WIRING ============ */
function getDrug(id){ return DRUGS.find(dr => dr.id === id); }

let selectedDrugId = 'dobutamine';

function populateDrugSelect(){
  const panel = document.getElementById('drugSelectPanel');
  panel.innerHTML = '';
  DRUGS.forEach(d => {
    const opt = document.createElement('div');
    opt.className = 'sp-custom-select-option' + (d.id === selectedDrugId ? ' selected' : '');
    opt.textContent = d.name;
    opt.dataset.id = d.id;
    opt.onclick = () => selectDrug(d.id);
    panel.appendChild(opt);
  });
  document.getElementById('drugSelectLabel').textContent = getDrug(selectedDrugId).name;
}

function selectDrug(id){
  selectedDrugId = id;
  document.getElementById('drugSelectLabel').textContent = getDrug(id).name;
  document.getElementById('drugSelectWrap').classList.remove('open');
  document.querySelectorAll('#drugSelectPanel .sp-custom-select-option').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });
  onDrugChange();
}

function toggleDrugDropdown(){
  document.querySelectorAll('.sp-custom-select.open').forEach(el => { if(el.id !== 'drugSelectWrap') el.classList.remove('open'); });
  document.getElementById('drugSelectWrap').classList.toggle('open');
}

document.addEventListener('click', (e) => {
  document.querySelectorAll('.sp-custom-select.open').forEach(wrap => {
    if(!wrap.contains(e.target)) wrap.classList.remove('open');
  });
});

/* Generic custom-select (used for concUnit / doseUnit / outDoseUnit) */
const customSelectState = {};

/* Show 'g' as 'gm' and 'g/hr' as 'gm/hr' for readability; internal values stay 'g' / 'g/hr' so calculations are unaffected */
function unitDisplay(id, u){
  if(u === 'g') return 'gm';
  if(u === 'g/hr') return 'gm/hr';
  return u;
}
function dispUnit(u){ return unitDisplay(null, u); }

function buildCustomSelect(id, options, selected){
  customSelectState[id] = selected;
  document.getElementById(id + 'Label').textContent = unitDisplay(id, selected);
  const panel = document.getElementById(id + 'Panel');
  panel.innerHTML = '';
  options.forEach(u => {
    const opt = document.createElement('div');
    opt.className = 'sp-custom-select-option' + (u === selected ? ' selected' : '');
    opt.textContent = unitDisplay(id, u);
    opt.dataset.value = u;
    opt.onclick = () => chooseCustomSelect(id, u);
    panel.appendChild(opt);
  });
}

function chooseCustomSelect(id, value){
  customSelectState[id] = value;
  document.getElementById(id + 'Label').textContent = unitDisplay(id, value);
  document.getElementById(id + 'Wrap').classList.remove('open');
  document.querySelectorAll('#' + id + 'Panel .sp-custom-select-option').forEach(el => {
    el.classList.toggle('selected', el.dataset.value === value);
  });
  if(id === 'concUnit') renderTerminalPlaceholder();
}

function toggleCustomSelect(id){
  document.querySelectorAll('.sp-custom-select.open').forEach(el => { if(el.id !== id + 'Wrap') el.classList.remove('open'); });
  document.getElementById(id + 'Wrap').classList.toggle('open');
}

function onDrugChange(){
  const drug = getDrug(selectedDrugId);
  const family = familyOf(drug.amtU);

  buildCustomSelect('concUnit', CONC_UNIT_OPTIONS[family], drug.amtU);
  buildCustomSelect('doseUnit', DOSE_OPTIONS[family], drug.doseU);
  buildCustomSelect('outDoseUnit', DOSE_OPTIONS[family], drug.doseU);

  document.getElementById('concAmount').value = drug.amt ?? '';
  document.getElementById('concVolume').value = drug.vol ?? '';
  document.getElementById('doseValue').value = '';
  document.getElementById('rateValue').value = '';
  document.getElementById('drugNote').textContent = drug.note || '';

  const perKg = parseDoseUnit(drug.doseU).perKg;
  document.getElementById('weightFlag').textContent = perKg ? '(required)' : '';

  updateDoseRangeHint();
}

function updateDoseRangeHint(){
  const drug = getDrug(selectedDrugId);
  const hint = document.getElementById('doseRangeHint');
  if(drug.rangeNote){
    hint.textContent = drug.rangeNote;
  } else if(drug.lo !== null && drug.hi !== null){
    hint.textContent = `Usual adult range: ${fmt(drug.lo)}–${fmt(drug.hi)} ${dispUnit(drug.doseU)} — verify local protocol.`;
  } else {
    hint.textContent = 'No standard range on file — verify against a trusted reference before infusing.';
  }
}

function switchMode(mode){
  currentMode = mode;
  document.getElementById('mode-dose').classList.toggle('active', mode === 'dose');
  document.getElementById('mode-rate').classList.toggle('active', mode === 'rate');
  document.getElementById('tab-mode-dose').classList.toggle('active-mode', mode === 'dose');
  document.getElementById('tab-mode-rate').classList.toggle('active-mode', mode === 'rate');
}

/* ============ TERMINAL BUILDER ============ */
function line(html){ return `<span>${html}</span>`; }
function blank(){ return `<span class="t-blank"></span>`; }

function buildTerminalDoseToRate(drug, doseVal, doseUnit, weight, concAmount, concUnit, concVol, result){
  const d = result.parsed;
  const out = [];
  out.push(line(`<span class="t-prompt">$</span> drug = <span class="t-eq">${drug.name}</span>`));
  out.push(line(`<span class="t-prompt">$</span> dose_input = <span class="t-eq">${fmt(doseVal)} ${dispUnit(doseUnit)}</span>`));
  if(d.perKg) out.push(line(`<span class="t-prompt">$</span> weight = <span class="t-eq">${fmt(weight)} kg</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 1 — convert dose to amount per hour</span>`));
  let running = doseVal;
  let unitLabel = d.amountUnit + '/' + d.timeUnit + (d.perKg ? '/kg' : '');
  if(d.perKg){
    const before = running;
    running = running * weight;
    out.push(line(`<span class="t-prompt">$</span> ${fmt(before)} ${dispUnit(d.amountUnit)}/kg/${d.timeUnit} × ${fmt(weight)} kg = <span class="t-eq">${fmt(running)} ${dispUnit(d.amountUnit)}/${d.timeUnit}</span>`));
  }
  if(d.timeUnit === 'min'){
    const before = running;
    running = running * 60;
    out.push(line(`<span class="t-prompt">$</span> ${fmt(before)} ${dispUnit(d.amountUnit)}/min × 60 min/hr = <span class="t-eq">${fmt(running)} ${dispUnit(d.amountUnit)}/hr</span>`));
  }
  out.push(line(`<span class="t-prompt">$</span> dose_rate = <span class="t-result">${fmt(running)} ${dispUnit(d.amountUnit)}/hr</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 2 — concentration of the syringe/bag</span>`));
  const concBase = toBaseAmount(concAmount, concUnit);
  const baseLabel = concBase.family === 'mass' ? 'mcg' : (concBase.family === 'units' ? 'units' : 'mEq');
  if(concUnit !== baseLabel){
    out.push(line(`<span class="t-prompt">$</span> ${fmt(concAmount)} ${dispUnit(concUnit)} = <span class="t-eq">${fmt(concBase.value)} ${baseLabel}</span>`));
  }
  out.push(line(`<span class="t-prompt">$</span> concentration = ${fmt(concBase.value)} ${baseLabel} ÷ ${fmt(concVol)} mL = <span class="t-result">${fmt(result.concPerMl)} ${baseLabel}/mL</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 3 — convert dose rate to the same base unit</span>`));
  const doseInBase = fromBaseAmount(result.doseBasePerHour, result.family, baseLabel);
  if(d.amountUnit !== baseLabel){
    out.push(line(`<span class="t-prompt">$</span> ${fmt(running)} ${dispUnit(d.amountUnit)}/hr = <span class="t-eq">${fmt(result.doseBasePerHour)} ${baseLabel}/hr</span>`));
  }
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 4 — divide dose rate by concentration</span>`));
  out.push(line(`<span class="t-prompt">$</span> rate(mL/hr) = ${fmt(result.doseBasePerHour)} ${baseLabel}/hr ÷ ${fmt(result.concPerMl)} ${baseLabel}/mL`));
  out.push(line(`<span class="t-prompt">$</span> rate(mL/hr) = <span class="t-result">${fmt(result.mlPerHour)} mL/hr</span>`));
  return out.join('\n');
}

function buildTerminalRateToDose(drug, mlPerHour, outUnit, weight, concAmount, concUnit, concVol, result){
  const d = result.parsed;
  const out = [];
  out.push(line(`<span class="t-prompt">$</span> drug = <span class="t-eq">${drug.name}</span>`));
  out.push(line(`<span class="t-prompt">$</span> pump_rate = <span class="t-eq">${fmt(mlPerHour)} mL/hr</span>`));
  if(d.perKg) out.push(line(`<span class="t-prompt">$</span> weight = <span class="t-eq">${fmt(weight)} kg</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 1 — concentration of the syringe/bag</span>`));
  const concBase = toBaseAmount(concAmount, concUnit);
  const baseLabel = concBase.family === 'mass' ? 'mcg' : (concBase.family === 'units' ? 'units' : 'mEq');
  if(concUnit !== baseLabel){
    out.push(line(`<span class="t-prompt">$</span> ${fmt(concAmount)} ${dispUnit(concUnit)} = <span class="t-eq">${fmt(concBase.value)} ${baseLabel}</span>`));
  }
  out.push(line(`<span class="t-prompt">$</span> concentration = ${fmt(concBase.value)} ${baseLabel} ÷ ${fmt(concVol)} mL = <span class="t-result">${fmt(result.concPerMl)} ${baseLabel}/mL</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 2 — amount delivered per hour at this rate</span>`));
  out.push(line(`<span class="t-prompt">$</span> ${fmt(mlPerHour)} mL/hr × ${fmt(result.concPerMl)} ${baseLabel}/mL = <span class="t-result">${fmt(result.baseAmountPerHour)} ${baseLabel}/hr</span>`));
  out.push(blank());

  out.push(line(`<span class="t-comment"># Step 3 — convert to requested dose unit</span>`));
  let running = fromBaseAmount(result.baseAmountPerHour, concBase.family, d.amountUnit);
  if(d.amountUnit !== baseLabel){
    out.push(line(`<span class="t-prompt">$</span> ${fmt(result.baseAmountPerHour)} ${baseLabel}/hr = <span class="t-eq">${fmt(running)} ${dispUnit(d.amountUnit)}/hr</span>`));
  }
  if(d.timeUnit === 'min'){
    const before = running;
    running = running / 60;
    out.push(line(`<span class="t-prompt">$</span> ${fmt(before)} ${dispUnit(d.amountUnit)}/hr ÷ 60 = <span class="t-eq">${fmt(running)} ${dispUnit(d.amountUnit)}/min</span>`));
  }
  if(d.perKg){
    const before = running;
    running = running / weight;
    out.push(line(`<span class="t-prompt">$</span> ${fmt(before)} ${dispUnit(d.amountUnit)}/${d.timeUnit} ÷ ${fmt(weight)} kg = <span class="t-eq">${fmt(running)} ${dispUnit(outUnit)}</span>`));
  }
  out.push(blank());
  out.push(line(`<span class="t-prompt">$</span> dose = <span class="t-result">${fmt(running)} ${dispUnit(outUnit)}</span>`));
  return out.join('\n');
}

/* ============ RESULT PANEL ============ */
function setResultPanel(cls, label, value, body, badges){
  const box = document.getElementById('final-result-box');
  box.className = 'sp-final-result' + (cls ? ' ' + cls : '');
  document.getElementById('final-result-label').textContent = label || 'Result';
  document.getElementById('final-result-value').textContent = value;
  const badgeHtml = (badges || []).map(([k,v]) => `<span class="sp-badge">${k}: ${v}</span>`).join('');
  const disclaimer = '<div class="sp-disclaimer">Confirm against your unit\'s protocol and the actual bag in hand before administering.</div>';
  document.getElementById('final-result-note').innerHTML = (body ? `<div>${body}</div>` : '') + (badgeHtml ? `<div class="sp-badges">${badgeHtml}</div>` : '') + disclaimer;
}

function classifyRange(val, lo, hi){
  if(lo === null || hi === null) return 'unknown';
  if(val < lo) return 'low';
  if(val > hi) return 'high';
  return 'normal';
}

function setTerminal(html){
  const el = document.getElementById('terminal');
  el.innerHTML = html;
  el.scrollTop = el.scrollHeight;
}

/* ============ MAIN CALCULATE ============ */
function calculate(){
  const drug = getDrug(selectedDrugId);
  const weight = parseFloat(document.getElementById('weight').value);
  const concAmount = parseFloat(document.getElementById('concAmount').value);
  const concUnit = customSelectState.concUnit;
  const concVol = parseFloat(document.getElementById('concVolume').value);

  if(isNaN(concAmount) || isNaN(concVol) || concVol <= 0){
    setResultPanel('caution', 'Missing concentration', '—', 'Enter both the drug amount and the total diluent volume to continue.', []);
    document.getElementById('terminal').innerHTML = '<span class="sp-terminal-empty">$ waiting for concentration values...</span>';
    return;
  }

  try {
    if(currentMode === 'dose'){
      const doseVal = parseFloat(document.getElementById('doseValue').value);
      const doseUnit = customSelectState.doseUnit;
      if(isNaN(doseVal)){
        setResultPanel('caution', 'Missing dose', '—', 'Enter the desired dose to calculate the infusion rate.', []);
        return;
      }
      const result = calcRateFromDose(doseVal, doseUnit, weight, concAmount, concUnit, concVol);
      const rangeCat = classifyRange(doseVal, drug.lo, drug.hi);
      const sameUnit = doseUnit === drug.doseU;

      let cls = 'info', body = '';
      if(sameUnit && rangeCat === 'normal'){ cls = 'safe'; body = `Dose entered is within the usual adult range for ${drug.name} (${fmt(drug.lo)}–${fmt(drug.hi)} ${dispUnit(drug.doseU)}).`; }
      else if(sameUnit && rangeCat === 'low'){ cls = 'caution'; body = `Dose is below the usual adult range for ${drug.name} (${fmt(drug.lo)}–${fmt(drug.hi)} ${dispUnit(drug.doseU)}) — confirm this is intended.`; }
      else if(sameUnit && rangeCat === 'high'){ cls = 'danger'; body = `Dose is above the usual adult range for ${drug.name} (${fmt(drug.lo)}–${fmt(drug.hi)} ${dispUnit(drug.doseU)}) — double-check before infusing.`; }
      else { cls = 'info'; body = drug.lo === null ? 'No standard range on file for this drug — verify independently.' : `Range check available in ${dispUnit(drug.doseU)}; select that unit to auto-verify, or compare manually.`; }

      setResultPanel(cls, 'Infusion Rate', `${fmt(result.mlPerHour)} mL/hr`, body, [
        ['Drug', drug.name],
        ['Dose', `${fmt(doseVal)} ${dispUnit(doseUnit)}`],
        ['Conc.', `${fmt(result.concPerMl)} ${result.family==='mass'?'mcg':(result.family==='units'?'units':'mEq')}/mL`],
        ['Rate', `${fmt(result.mlPerHour)} mL/hr`],
      ]);
      setTerminal(buildTerminalDoseToRate(drug, doseVal, doseUnit, weight, concAmount, concUnit, concVol, result));

    } else {
      const mlPerHour = parseFloat(document.getElementById('rateValue').value);
      const outUnit = customSelectState.outDoseUnit;
      if(isNaN(mlPerHour)){
        setResultPanel('caution', 'Missing rate', '—', 'Enter the current pump rate (mL/hr) to back-calculate the dose.', []);
        return;
      }
      const result = calcDoseFromRate(mlPerHour, outUnit, weight, concAmount, concUnit, concVol);
      const rangeCat = outUnit === drug.doseU ? classifyRange(result.doseVal, drug.lo, drug.hi) : 'unknown';

      let cls = 'info', body = '';
      if(rangeCat === 'normal'){ cls = 'safe'; body = `This dose is within the usual adult range for ${drug.name} (${fmt(drug.lo)}–${fmt(drug.hi)} ${dispUnit(drug.doseU)}).`; }
      else if(rangeCat === 'low'){ cls = 'caution'; body = `This dose is below the usual adult range for ${drug.name}.`; }
      else if(rangeCat === 'high'){ cls = 'danger'; body = `This dose is above the usual adult range for ${drug.name} — double-check.`; }
      else { body = drug.lo === null ? 'No standard range on file for this drug — verify independently.' : `Select ${dispUnit(drug.doseU)} as the output unit to auto-verify against the usual range.`; }

      setResultPanel(cls, 'Dose', `${fmt(result.doseVal)} ${dispUnit(outUnit)}`, body, [
        ['Drug', drug.name],
        ['Rate', `${fmt(mlPerHour)} mL/hr`],
        ['Dose', `${fmt(result.doseVal)} ${dispUnit(outUnit)}`],
      ]);
      setTerminal(buildTerminalRateToDose(drug, mlPerHour, outUnit, weight, concAmount, concUnit, concVol, result));
    }
  } catch(e){
    if(e.message === 'WEIGHT_REQUIRED'){
      setResultPanel('caution', 'Weight required', '—', 'The selected dose unit is weight-based (per kg) — enter the patient\'s weight in kilograms.', []);
      document.getElementById('terminal').innerHTML = '<span class="sp-terminal-empty">$ error: weight required for a per-kg dose unit</span>';
    } else if(e.message === 'FAMILY_MISMATCH'){
      setResultPanel('caution', 'Unit mismatch', '—', 'The concentration unit and dose unit are not compatible (e.g. mixing mass with units/mEq). Adjust the concentration unit.', []);
      document.getElementById('terminal').innerHTML = '<span class="sp-terminal-empty">$ error: concentration unit and dose unit families do not match</span>';
    } else {
      setResultPanel('caution', 'Check inputs', '—', 'Could not calculate — please check the values entered.', []);
      document.getElementById('terminal').innerHTML = '<span class="sp-terminal-empty">$ error: invalid input</span>';
    }
  }
  document.getElementById('final-result-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderTerminalPlaceholder(){ /* no-op hook for future live-preview */ }

function resetForm(){
  document.getElementById('weight').value = '';
  document.getElementById('doseValue').value = '';
  document.getElementById('rateValue').value = '';
  onDrugChange();
  setResultPanel('', 'Result', '—', 'Select a drug, enter the concentration and dose above, then press Calculate.', []);
  document.getElementById('terminal').innerHTML = '<span class="sp-terminal-empty">$ awaiting calculation... enter values above and press Calculate</span>';
}

/* ============ INIT ============ */
window.addEventListener('DOMContentLoaded', () => {
  populateDrugSelect();
  onDrugChange();
});

/* ═══════════════ GLOBAL SEARCH ═══════════════ */
var gsIndex = [];
var gsCurrentMatches = [];
var gsCardSelector = '.drug-card, .bolus-card, .calc-card, .aht-card, .ucv-sub-card, .defib-expand, .special-cat, .gl-sub-card, [data-gs-card]';

function gsTagFor(tabName) {
  return { bolus: 'Bolus', infusion: 'Infusion', special: 'Special Calc', defib: 'Cardio/Defib' }[tabName] || tabName;
}

function gsGetTitle(el) {
  if (el.classList.contains('drug-card') || el.classList.contains('bolus-card')) {
    var n = el.querySelector(':scope > .drug-header .drug-name, :scope > .bolus-header .drug-name');
    return n ? n.textContent.trim() : null;
  }
  if (el.classList.contains('calc-card')) {
    var t = el.querySelector(':scope > .calc-title');
    if (!t) return null;
    var c = t.cloneNode(true);
    c.querySelectorAll('.calc-title-dot, .calc-chevron, .special-cat-count, .special-cat-chevron, .calc-pin').forEach(function (x) { x.remove(); });
    return c.textContent.trim();
  }
  if (el.classList.contains('aht-card')) {
    var h = el.querySelector(':scope > .aht-header');
    if (!h || !h.children[0] || !h.children[0].children[0]) return null;
    return h.children[0].children[0].textContent.trim();
  }
  if (el.classList.contains('ucv-sub-card')) {
    var s = el.querySelector(':scope > .ucv-sub-header > span:first-child');
    return s ? s.textContent.trim() : null;
  }
  if (el.classList.contains('defib-expand')) {
    var r = el.querySelector(':scope > .defib-expand-header .defib-rhythm');
    return r ? r.textContent.trim() : null;
  }
  if (el.classList.contains('gl-sub-card')) {
    var g = el.querySelector(':scope > .gl-sub-header .gl-sub-header-txt');
    if (!g) return null;
    var gc = g.cloneNode(true);
    gc.querySelectorAll('.gl-sub-emoji').forEach(function (x) { x.remove(); });
    return gc.textContent.trim();
  }
  // ── Generic fallback (no special case above matched) ──
  // Every card family in this app names its clickable header with "header"/
  // "title"/"summary" in the class, and marks decorative bits (icons, dots,
  // chevrons, counts, badges, pin buttons) with matching class keywords. Any
  // future card that follows this same convention gets auto-indexed here —
  // no need to add a new branch to this function.
  var gh = el.querySelector(':scope > [class*="header"], :scope > [class*="title"], :scope > summary');
  if (gh) {
    var ghc = gh.cloneNode(true);
    ghc.querySelectorAll('button, input, [class*="chevron"], [class*="dot"], [class*="emoji"], [class*="icon"], [class*="count"], [class*="badge"]').forEach(function (x) { x.remove(); });
    var ghTxt = ghc.textContent.trim();
    if (ghTxt) return ghTxt;
  }
  return null;
}

function gsFindTabBtn(card, scope, name) {
  if (!card) return null;
  var btns = card.querySelectorAll(':scope > .gl-sub-body > .gl-tabs > .gl-tab');
  for (var i = 0; i < btns.length; i++) {
    var oc = btns[i].getAttribute('onclick') || '';
    if (oc.indexOf("glTab('" + scope + "','" + name + "'") !== -1) return btns[i];
  }
  return null;
}

function gsBuildIndex() {
  gsIndex = [];
  document.querySelectorAll(gsCardSelector).forEach(function (el) {
    if (!el.id) return;
    var title = gsGetTitle(el);
    if (!title) return;
    var tabEl = el.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    // Body text is captured too (not just the title) so a search for a term
    // mentioned inside the card's content — e.g. "intubation" in a GCS note —
    // still surfaces it, even when that word isn't in the card's own title.
    gsIndex.push({ title: title, id: el.id, tab: tabName, tag: gsTagFor(tabName), sub: null, keywords: el.textContent.toLowerCase() });
  });
  // Granular: individual HTN drugs inside category cards
  document.querySelectorAll('.aht-drug-row .aht-drug-name').forEach(function (nameEl) {
    var row = nameEl.closest('.aht-drug-row');
    var card = nameEl.closest('.aht-card');
    if (!row || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    gsIndex.push({ title: nameEl.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName), sub: gsGetTitle(card), highlightTarget: nameEl });
  });
  // Granular: individual lab parameters inside ICU Unit Converter
  document.querySelectorAll('.ucv-row .ucv-param').forEach(function (paramEl) {
    var row = paramEl.closest('.ucv-row');
    var card = paramEl.closest('.ucv-sub-card');
    if (!row || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    var clone = paramEl.cloneNode(true);
    var normEl = clone.querySelector('.ucv-normal');
    if (normEl) normEl.remove();
    gsIndex.push({ title: clone.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName), sub: 'Unit Converter', highlightTarget: paramEl });
  });
  // Granular: individual drugs/options inside Status Epilepticus (each lives in
  // its own inner gl-tab — e.g. Lorazepam is only visible on the "5-20" tab —
  // so the matching outer tab button is stored to be clicked before scrolling.
  document.querySelectorAll('.se-drug-row .se-drug-name').forEach(function (nameEl) {
    var row = nameEl.closest('.se-drug-row');
    var panel = nameEl.closest('.gl-panel');
    var card = nameEl.closest('.gl-sub-card');
    if (!row || !panel || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    var panelName = panel.id.replace('gl-se-', '');
    var clone = nameEl.cloneNode(true);
    clone.querySelectorAll('em').forEach(function (x) { x.remove(); });
    gsIndex.push({
      title: clone.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName),
      sub: gsGetTitle(card), tabBtn: gsFindTabBtn(card, 'se', panelName), highlightTarget: nameEl
    });
  });
  // Granular: individual organisms inside the Antibiotic Coverage card
  // (lives on the "Organism" inner tab, so switch to it before scrolling).
  document.querySelectorAll('#gls-abx-body .abx-org-name').forEach(function (nameEl) {
    var row = nameEl.closest('.abx-org-row');
    var card = nameEl.closest('.gl-sub-card');
    if (!row || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    gsIndex.push({
      title: nameEl.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName),
      sub: gsGetTitle(card), tabBtn: gsFindTabBtn(card, 'abx', 'lookup'), highlightTarget: nameEl
    });
  });
  // Granular: individual diseases inside Haematology at a Glance (CBC card's
  // "Haematology at a Glance" inner tab). The disease sits behind a closed
  // dropdown, so selecting it and scrolling to the rendered rows below is far
  // more useful than scrolling to the (hidden) dropdown option itself.
  document.querySelectorAll('#hg-dd-panel .hg-dd-option').forEach(function (optEl) {
    var card = optEl.closest('.gl-sub-card');
    if (!card) return;
    var tabEl = optEl.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    var m = (optEl.getAttribute('onclick') || '').match(/hgSetDisease\('([^']+)'\)/);
    var diseaseId = m ? m[1] : null;
    gsIndex.push({
      title: optEl.textContent.trim(), el: optEl, tab: tabName, tag: gsTagFor(tabName),
      sub: 'Haematology at a Glance', tabBtn: gsFindTabBtn(card, 'cbc', 'haem'),
      preAction: diseaseId ? function () { hgSetDisease(diseaseId); } : null,
      scrollTarget: document.getElementById('hg-rows')
    });
  });
  // Granular: individual drugs inside the Antibiotic Coverage card's Spectrum
  // table (lives on the "Spectrum" inner tab).
  document.querySelectorAll('#abx-spectrumTable .abx-drug-name').forEach(function (nameEl) {
    var row = nameEl.closest('tr');
    var card = nameEl.closest('.gl-sub-card');
    if (!row || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    gsIndex.push({
      title: nameEl.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName),
      sub: gsGetTitle(card), tabBtn: gsFindTabBtn(card, 'abx', 'spectrum'), highlightTarget: nameEl
    });
  });
  // Granular: individual drugs inside the Antibiotic Coverage card's Renal
  // Dosing table (lives on the "Renal Dosing" inner tab).
  document.querySelectorAll('#abx-renalTable .abx-drug-name').forEach(function (nameEl) {
    var row = nameEl.closest('tr');
    var card = nameEl.closest('.gl-sub-card');
    if (!row || !card) return;
    var tabEl = row.closest('.tab-content');
    var tabName = tabEl ? tabEl.id.replace('tab-', '') : null;
    if (!tabName) return;
    gsIndex.push({
      title: nameEl.textContent.trim(), el: row, tab: tabName, tag: gsTagFor(tabName),
      sub: gsGetTitle(card), tabBtn: gsFindTabBtn(card, 'abx', 'renal'), highlightTarget: nameEl
    });
  });
}

function gsEscape(s) {
  var d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* ── Recent searches (persisted) ── */
var gsRecent = [];
gsLoadRecent();
function gsLoadRecent() {
  try {
    var raw = localStorage.getItem('gs-recent-v1');
    gsRecent = raw ? JSON.parse(raw) : [];
  } catch (e) { gsRecent = []; }
}
function gsSaveRecent() {
  try { localStorage.setItem('gs-recent-v1', JSON.stringify(gsRecent)); } catch (e) {}
}
function gsRecordRecent(item) {
  gsRecent = gsRecent.filter(function (r) { return !(r.title === item.title && r.tab === item.tab); });
  gsRecent.unshift({ title: item.title, tab: item.tab, tag: item.tag, sub: item.sub || null });
  gsRecent = gsRecent.slice(0, 6);
  gsSaveRecent();
}
function gsClearRecent(ev) {
  if (ev) ev.stopPropagation();
  gsRecent = [];
  gsSaveRecent();
  gsRenderIdle();
}
function gsResultRowHTML(m, onclickAttr) {
  var cleanTitle = m.title.replace(/[★☆]/g, '').replace(/\s+/g, ' ').trim();
  var titleLine = gsEscape(cleanTitle) + ' <span class="gs-result-tag-inline">(' + gsEscape(m.tag) + ')</span>';
  var subLine = m.sub ? '<div class="gs-result-sub">' + gsEscape(m.sub) + '</div>' : '';
  return '<div class="gs-result-item" ' + onclickAttr + '>'
    + '<div style="flex:1;min-width:0"><div class="gs-result-title">' + titleLine + '</div>' + subLine + '</div>'
    + '</div>';
}
function gsRenderIdle() {
  var results = document.getElementById('gsResults');
  if (!gsRecent.length) {
    results.innerHTML = '';
    results.classList.remove('gs-open');
    return;
  }
  var html = '<div class="gs-section-label"><span>Recent</span><span class="gs-clear-recent" onclick="gsClearRecent(event)">Clear</span></div>';
  html += gsRecent.map(function (m, i) { return gsResultRowHTML(m, 'onclick="gsGoToRecent(' + i + ')"'); }).join('');
  results.innerHTML = html;
  results.classList.add('gs-open');
}

function gsSearch(q) {
  var results = document.getElementById('gsResults');
  q = q.trim().toLowerCase();
  if (q.length < 2) {
    gsRenderIdle();
    gsCurrentMatches = [];
    return;
  }
  // Word-prefix matching: each query word must match the beginning of a word
  // (at a word boundary), not as a substring in the middle of a word.
  // E.g., "hepa" matches "heparin" and "Unfractionate Heparin" (both titles),
  // but not partial substrings like "arin" or "nfract".
  var queryWords = q.split(/\s+/).filter(function (w) { return w.length > 0; });
  if (queryWords.length === 0) {
    gsRenderIdle();
    gsCurrentMatches = [];
    return;
  }
  
  var titleMatches = [];
  var bodyMatches = [];
  
  gsIndex.forEach(function (item) {
    var titleLower = item.title.toLowerCase();
    var keywordsLower = item.keywords ? item.keywords : '';
    
    // Check if all query words match as word prefixes (word boundaries)
    var allWordsInTitle = queryWords.every(function (word) {
      var escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('\\b' + escaped).test(titleLower);
    });
    var allWordsInKeywords = queryWords.every(function (word) {
      var escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('\\b' + escaped).test(keywordsLower);
    });
    
    if (allWordsInTitle) {
      titleMatches.push(item);
    } else if (allWordsInKeywords) {
      bodyMatches.push(item);
    }
  });
  
  var combined = titleMatches.concat(bodyMatches);
  // De-duplicate by DOM containment: when a specific match (e.g. a single drug
  // row, or a card nested inside a broader category) and one of its own
  // ancestors both match the same query, showing both is redundant — the
  // ancestor's "match" is really just because the specific item's text lives
  // inside it. Keep only the most specific (innermost) match in any such
  // ancestor/descendant pair, so a broad category never crowds out — or
  // duplicates — the exact card/row that actually matched.
  var withEls = combined.map(function (m) {
    return { item: m, el: m.el || (m.id ? document.getElementById(m.id) : null) };
  });
  var deduped = withEls.filter(function (r, idx) {
    if (!r.el) return true;
    return !withEls.some(function (other, j) {
      return j !== idx && other.el && r.el !== other.el && r.el.contains(other.el);
    });
  }).map(function (r) { return r.item; });
  
  var matches = deduped.slice(0, 10);
  gsCurrentMatches = matches;
  if (matches.length === 0) {
    results.innerHTML = '<div class="gs-empty">No matches found</div>';
    results.classList.add('gs-open');
    return;
  }
  var html = '<div class="gs-section-label"><span>Results</span></div>';
  html += matches.map(function (m, i) { return gsResultRowHTML(m, 'onclick="gsGoTo(' + i + ')"'); }).join('');
  results.innerHTML = html;
  results.classList.add('gs-open');
}

function gsIsOpen(c) {
  if (c.classList.contains('open')) return true;
  var body = c.querySelector(':scope > .calc-body, :scope > .ucv-sub-body, :scope > .special-cat-body, :scope > .gl-sub-body, :scope > [class*="-body"], :scope > [class*="-content"]');
  if (body) return !!body.style.display && body.style.display !== 'none';
  return false;
}

function gsOpenChain(el) {
  var chain = [];
  var node = el;
  while (node && node !== document.body) {
    if (node.matches && node.matches(gsCardSelector)) chain.unshift(node);
    node = node.parentElement;
  }
  chain.forEach(function (c) {
    if (!gsIsOpen(c)) {
      var header = c.querySelector(':scope > .drug-header, :scope > .bolus-header, :scope > .calc-title, :scope > .aht-header, :scope > .ucv-sub-header, :scope > .defib-expand-header, :scope > .special-cat-header, :scope > .gl-sub-header, :scope > [class*="header"], :scope > [class*="title"], :scope > summary');
      if (header) header.click();
    }
  });
}

function gsNavigateToItem(item) {
  gsClose();
  var btns = document.querySelectorAll('.tab-btn');
  var tabMap = { bolus: 0, infusion: 1, special: 2, defib: 3 };
  var idx = tabMap[item.tab];
  if (idx !== undefined && btns[idx]) showTab(item.tab, btns[idx]);
  setTimeout(function () {
    var target = item.id ? document.getElementById(item.id) : item.el;
    if (!target) return;
    gsOpenChain(target);
    // Switch to the item's inner gl-tab (if it lives on one) before doing
    // anything else, since the target may be hidden behind an inactive tab.
    if (item.tabBtn) item.tabBtn.click();
    if (item.preAction) item.preAction();
    var scrollTarget = item.scrollTarget || target;
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // For granular matches (a specific drug/parameter inside a row), only the
    // matched text itself glows — not its whole row — so the highlight reads
    // as "this is the word you searched for", not "this whole line changed".
    // Card-level matches (no specific inner text element) still glow as a
    // block, since there's no narrower target to point to.
    var highlightEl = item.highlightTarget || scrollTarget;
    var highlightClass = item.highlightTarget ? 'gs-word-highlight' : 'gs-highlight';
    setTimeout(function () {
      highlightEl.classList.add(highlightClass);
      setTimeout(function () { highlightEl.classList.remove(highlightClass); }, 2300);
    }, 320);
  }, 130);
}

function gsGoTo(i) {
  var item = gsCurrentMatches[i];
  if (!item) return;
  gsRecordRecent(item);
  gsNavigateToItem(item);
}

function gsGoToRecent(i) {
  var r = gsRecent[i];
  if (!r) return;
  // Re-locate the live element by title + tab (DOM refs aren't persisted across reloads)
  var item = gsIndex.filter(function (it) { return it.title === r.title && it.tab === r.tab; })[0];
  if (!item) { gsRecent.splice(i, 1); gsSaveRecent(); gsRenderIdle(); return; }
  gsRecordRecent(item);
  gsNavigateToItem(item);
}

/* ═══════════════ Tab position memory ═══════════════
   A pull-to-refresh (or any full page reload) used to always land back on the
   Bolus tab. This remembers only the active tab so a reload restores the same
   tab — it no longer tracks which card(s)/sub-entries were open (this only
   restores UI position, never cached content). */
var NAV_STATE_KEY = 'app-nav-state-v1';

function navSaveState() {
  try {
    var activeTabEl = document.querySelector('.tab-content.active');
    var tab = activeTabEl ? activeTabEl.id.replace('tab-', '') : 'bolus';
    localStorage.setItem(NAV_STATE_KEY, JSON.stringify({ tab: tab }));
  } catch (e) {}
}

function navRestoreState() {
  var state = null;
  try {
    var raw = localStorage.getItem(NAV_STATE_KEY);
    state = raw ? JSON.parse(raw) : null;
  } catch (e) { state = null; }

  // Fresh install (nothing saved yet) — land on Special Calc rather than
  // the Bolus tab that's active by default in the raw markup.
  var tabToShow = state && state.tab ? state.tab : 'special';

  var btns = document.querySelectorAll('.tab-btn');
  var tabMap = { bolus: 0, infusion: 1, special: 2, defib: 3 };
  var idx = tabMap[tabToShow];
  var tabEl = document.getElementById('tab-' + tabToShow);
  if (idx !== undefined && btns[idx] && tabEl && !tabEl.classList.contains('active')) {
    showTab(tabToShow, btns[idx]);
  }
}

function gsOpen() {
  document.getElementById('gsOverlay').classList.add('gs-active');
  document.getElementById('gsBackdrop').classList.add('gs-active');
  document.getElementById('gsHandle').classList.add('gs-hidden');
  gsRenderIdle();
  var input = document.getElementById('gsInput');
  setTimeout(function () { input.focus(); }, 160);
}

function gsClose() {
  document.getElementById('gsOverlay').classList.remove('gs-active');
  document.getElementById('gsBackdrop').classList.remove('gs-active');
  document.getElementById('gsHandle').classList.remove('gs-hidden');
  document.getElementById('gsInput').value = '';
  document.getElementById('gsInput').blur();
  document.getElementById('gsResults').innerHTML = '';
  document.getElementById('gsResults').classList.remove('gs-open');
  gsCurrentMatches = [];
}

window.addEventListener('load', function () { setTimeout(function () { gsBuildIndex(); gsLoadRecent(); }, 150); });

// ═══════════════ Back button / back gesture handling ═══════════════
// A single back press (or edge-swipe gesture) never exits the app — it
// steps back through the last in-app "screen" that was opened (a calc
// card, a tab switch, the menu, or global search), one step per press,
// same as the user pressing an on-screen back/close control themselves.
// Two RAPID back presses/gestures in quick succession (within
// BACK_DOUBLE_MS) exit the app instead of stepping back.
(function () {
  var BACK_STACK = [];          // undo functions, most-recently-opened last
  var BACK_DOUBLE_MS = 200;     // max gap between presses to count as "rapid"
  var lastPopTime = 0;
  var suppressPush = false;     // true while we are undoing (avoid re-recording it)

  function armTrap() {
    try { history.pushState({ backTrap: true }, '', location.href); } catch (e) {}
  }
  function recordBack(undoFn) {
    if (!suppressPush) BACK_STACK.push(undoFn);
  }

  // ── toggleCalc: record only when a card is being OPENED ──
  var _toggleCalc = window.toggleCalc;
  window.toggleCalc = function (id) {
    var card = document.getElementById(id);
    var body = card ? card.querySelector('.calc-body') : null;
    var wasOpen = !!(body && body.style.display !== 'none');
    _toggleCalc(id);
    if (!wasOpen) {
      recordBack(function () {
        var b = card && card.querySelector('.calc-body');
        if (b && b.style.display !== 'none') { _toggleCalc(id); return true; }
        return false;
      });
    }
  };

  // ── toggleDefibECG: same open/close pattern, used for the AFib/Flutter/
  //    VT/VF/WCT expand sections in the Defib tab ──
  var _toggleDefibECG = window.toggleDefibECG;
  window.toggleDefibECG = function (id) {
    var el = document.getElementById(id);
    var wasOpen = !!(el && el.classList.contains('open'));
    _toggleDefibECG(id);
    if (!wasOpen) {
      recordBack(function () {
        var e2 = document.getElementById(id);
        if (e2 && e2.classList.contains('open')) { _toggleDefibECG(id); return true; }
        return false;
      });
    }
  };

  // ── showTab: record the previously active tab ──
  var _showTab = window.showTab;
  window.showTab = function (name, btn) {
    var prevEl = document.querySelector('.tab-content.active');
    var prevName = prevEl ? prevEl.id.replace('tab-', '') : null;
    if (prevName && prevName !== name) {
      recordBack(function () {
        var tabEl = document.getElementById('tab-' + prevName);
        if (tabEl && !tabEl.classList.contains('active')) {
          var btns = document.querySelectorAll('.tab-btn');
          var tabMap = { bolus: 0, infusion: 1, special: 2, defib: 3 };
          var idx = tabMap[prevName];
          if (idx !== undefined && btns[idx]) { _showTab(prevName, btns[idx]); return true; }
        }
        return false;
      });
    }
    _showTab(name, btn);
  };

  // ── Hamburger menu ──
  var _openMenu = window.openMenu;
  window.openMenu = function () {
    _openMenu();
    recordBack(function () {
      var panel = document.getElementById('menuPanel');
      if (panel && panel.classList.contains('open')) { closeMenu(); return true; }
      return false;
    });
  };

  // ── Global search ──
  var _gsOpen = window.gsOpen;
  window.gsOpen = function () {
    _gsOpen();
    recordBack(function () {
      var ov = document.getElementById('gsOverlay');
      if (ov && ov.classList.contains('gs-active')) { gsClose(); return true; }
      return false;
    });
  };

  // ── The actual back press / gesture ──
  window.addEventListener('popstate', function () {
    var now = Date.now();
    var rapid = (now - lastPopTime) < BACK_DOUBLE_MS;
    lastPopTime = now;

    if (rapid) {
      // Second rapid press: exit instead of stepping back further. Works
      // as an installed PWA/TWA (the standalone window closes); inside an
      // ordinary browser tab, where script-initiated window.close() is
      // restricted, the tab's own back/exit takes over on the next press.
      try { window.close(); } catch (e) {}
      return;
    }

    suppressPush = true;
    while (BACK_STACK.length) {
      var undo = BACK_STACK.pop();
      var did = false;
      try { did = undo(); } catch (e) { did = true; }
      if (did) break;
    }
    suppressPush = false;

    armTrap(); // stay captured for the next single press
  });

  armTrap();
})();

// ═══ PWA: request persistent storage (best-effort — protects the cache
// from automatic eviction under phone storage pressure; it can't override
// a user's explicit "Clear browsing data" in Chrome, but if the app is
// actually *installed* — opened from the home-screen icon, not a bookmark
// — Android already keeps its storage separate from Chrome's, so
// "Clear browsing data" doesn't reach it either way). ═══
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(function () {});
}

// ═══ PWA: register service worker + auto-update ═══
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' })
      .then(function (reg) {
        // Check for a newer service worker right away, then whenever
        // network comes back, the tab becomes visible again, or every hour.
        reg.update();
        window.addEventListener('online', function () { reg.update(); });
        document.addEventListener('visibilitychange', function () {
          if (document.visibilityState === 'visible') reg.update();
        });
        setInterval(function () { reg.update(); }, 60 * 60 * 1000);
      })
      .catch(function (err) {
        console.warn('Service worker registration failed:', err);
      });

    // Once a new service worker activates and takes control (old cache
    // already dropped in its 'activate' handler), reload once so this
    // open tab picks up the fresh content immediately.
    let refreshed = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshed) return;
      refreshed = true;
      window.location.reload();
    });
  });
}
;
