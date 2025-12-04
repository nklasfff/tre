// Content database for all perspectives and connections
const content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en simpel metode hvor du gennem 7 øvelser aktiverer kroppens naturlige rystemekanisme. Når du tremorer (ryster), hjælper det din krop med at slippe spændinger og komme i balance. Det er som når dyr ryster efter en farlig situation - det hjælper nervesystemet med at vende tilbage til ro."
            },
            fagfolk: {
                title: "TRE - Klinisk Perspektiv",
                text: "TRE aktiverer neurogene tremor gennem systematisk muskeltrætning, primært i psoas og ben-muskulatur. Metoden faciliterer autonomt nervesystem-regulering uden at kræve narrativ processing af trauma. Effektiv som standalone eller integreret i eksisterende terapeutisk praksis."
            },
            videnskab: {
                title: "TRE - Neurobiologisk Mekanisme",
                text: "TRE inducerer neurogen tremor via muskel-spindle aktivering og proprioceptiv feedback. Tremor faciliterer polyvagal regulering, completion af incomplete defensive responses, og reorganisering af sensomotoriske mønstre associeret med traumatisk stress. Dokumenteret effekt på HPA-akse og autonomt nervesystem."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori - Dit Nervesystem",
                text: "Din krop har tre forskellige 'gear': Ro og fordøjelse (grøn), alarm og kamp/flugt (gul), og nedlukning (rød). Når du tremorer, hjælper det din krop med at skifte fra alarm eller nedlukning tilbage til det grønne gear, hvor du kan føle dig sikker og forbundet."
            },
            fagfolk: {
                title: "Polyvagal Teori - Autonomt Nervesystem",
                text: "Stephen Porges' teori beskriver tre fylogenetiske lag: ventral vagal (social engagement), sympatisk (mobilisering), dorsal vagal (immobilisering). TRE faciliterer bevægelse fra sympatisk hyperarousal eller dorsal shutdown tilbage til ventral vagal regulering gennem neuroceptive signaler om sikkerhed."
            },
            videnskab: {
                title: "Polyvagal Teori - Neurofysiologi",
                text: "Vagalt modulerede kardiale og respiratoriske mønstre reflekterer autonomt nervesystem-tilstand. Tremor aktiverer afferent vagal signalering, hvilket nedregulerer amygdala-respons og faciliterer præfrontal korteks engagement. Respiratory sinus arrhythmia (RSA) forbedres, indikerende for øget vagal tone."
            }
        },
        narrative: {
            klient: {
                title: "Narrativ - Din Historie",
                text: "Den historie du fortæller om dig selv - 'jeg er altid anspændt', 'jeg kan ikke slappe af' - sidder i din krop. Når kroppen ændrer sig gennem tremor, kan din historie om dig selv også ændre sig. Du opdager: 'Jeg KAN faktisk slappe af', 'Min krop VED hvordan'."
            },
            fagfolk: {
                title: "Narrativ Psykologi - Identitetstransformation",
                text: "Autobiografisk narrativ er embodied og tilstandsafhængig. Når autonomt nervesystem reguleres (polyvagal shift), åbnes nye narrative muligheder. TRE faciliterer somatisk re-authoring uden eksplicit verbal processing - kroppen 'fortæller' en ny historie gennem direkte erfaring."
            },
            videnskab: {
                title: "Narrativ Neuroscience - Neural Reorganisering",
                text: "Autobiografisk hukommelse konstrueres gennem hippocampus-neocortex interaktion, moduleret af amygdala og autonomt nervesystem-tilstand. State-dependent retrieval betyder at narrativ tilgængelighed ændres med fysiologisk tilstand. TRE-induceret regulering faciliterer reconsolidation af traumatisk narrativ."
            }
        },
        enactivisme: {
            klient: {
                title: "Enactivisme - Aktiv Healing",
                text: "Din healing sker ikke ved at 'grave noget gammelt op' eller 'få noget ud'. I stedet SKABER du aktivt noget nyt hver gang du tremorer. Din krop lærer - gennem at gøre det - at den kan regulere sig selv. Det er som at lære at cykle: kroppen forstår gennem handling."
            },
            fagfolk: {
                title: "Enactivisme - Autopoietisk Reorganisering",
                text: "Varelas enactive cognition: perception og handling er uadskillige. TRE er ikke ekstraktion af 'lagret' materiale men aktiv enactment af ny sensomotorisk organisation. Tremor er autopoietisk proces - selvskabende, ikke symptom-reducerende. Healing emergerer gennem embodied handling."
            },
            videnskab: {
                title: "Enactivisme - Dynamiske Systemer",
                text: "Autopoietisk teori beskriver levende systemer som selvorganiserende, operationelt lukkede netværk. TRE faciliterer emergent reorganisering af sensomotoriske attraktorer gennem perturbation af eksisterende mønstre. Tremor er ikke discharge men kontinuerlig structural coupling mellem organisme og miljø."
            }
        },
        levine: {
            klient: {
                title: "Somatic Experiencing - Fuldførelse",
                text: "Når noget skræmmende sker, forbereder kroppen sig på at kæmpe eller flygte - men ofte blev det afbrudt. Den energi 'sidder fast'. Tremor hjælper kroppen med at fuldføre den bevægelse den skulle have lavet dengang. Det er som at færdiggøre en sætning der blev afbrudt midt i."
            },
            fagfolk: {
                title: "Somatic Experiencing - Trauma-completion",
                text: "Peter Levines SE model: trauma opstår når defensive orienting responses forbliver incomplete. TRE faciliterer discharge af 'frozen' survival energy gennem neurogen tremor. Titration og pendulering mellem aktivering og ro reorganiserer sensomotoriske mønstre associeret med traumatisk immobilisering."
            },
            videnskab: {
                title: "Somatic Experiencing - Neurobiologisk Completion",
                text: "Incomplete defensive responses vedligeholder sympatisk hyperarousal eller dorsal immobilization via brainstem reflexer. TRE aktiverer completion af motoriske programmmer gennem periaqueductal gray (PAG) og central pattern generators. Tremor faciliterer shift fra defensive til exploratory circuits."
            }
        },
        reich: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi kroppen som beskyttelse - og glemmer at slippe igen. Det bliver til mønstre i musklerne ('panser') der holder følelser og energi tilbage. Tremor hjælper musklerne med at slippe de gamle mønstre, så energi og følelser kan bevæge sig frit igen."
            },
            fagfolk: {
                title: "Bioenergetik - Character Armor",
                text: "Reich og Lowens teori om character armor: kroniske muskelspændinger embodier psykologisk forsvar. TRE faciliterer mildnelse af armor gennem neurogen tremor, hvilket restaurerer energetisk flow og affektiv tilgængelighed. Komplementerer verbal psykoterapi ved at arbejde gennem kroppen."
            },
            videnskab: {
                title: "Bioenergetik - Fascial og Muskulær Reorganisering",
                text: "Kronisk muskelspænding modificerer fascial viscoelastiske egenskaber og proprioceptiv signalering. TRE-induceret tremor reorganiserer myofasciale holding patterns gennem rhythmisk belastning og mekanisk stimulation. Ændrer både strukturelle og neurale komponenter af 'armoring'."
            }
        },
        psykologi: {
            klient: {
                title: "Klinisk Psykologi - Sikkerhed og Relation",
                text: "For at din krop kan slippe må du føle dig sikker. En terapeut eller guide skaber det trygge rum hvor tremor kan ske. Det handler ikke kun om teknikken - men også om at du føler dig set, hørt og accepteret. Healing sker i relationer, ikke i isolation."
            },
            fagfolk: {
                title: "Klinisk Psykologi - Terapeutisk Relation",
                text: "TRE effektivitet afhænger af terapeutisk alliance og co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed (polyvagal). Integration af somatisk arbejde med psykologisk forståelse af attachment, dissociation og titration. Relationel neurobiologi i praksis."
            },
            videnskab: {
                title: "Klinisk Psykologi - Interpersonal Neurobiology",
                text: "Terapeutisk relation modificerer klientens autonomt nervesystem via social engagement system (ventral vagal). Terapeuts egen regulering co-regulerer klient gennem mirror neurons og interbrain synchrony. TRE effectiveness medieres af attachment security og therapeutic alliance quality."
            }
        }
    },
    connections: {
        'tre-polyvagal': {
            klient: "Tremor hjælper dit nervesystem med at skifte fra alarm eller nedlukning tilbage til ro og sikkerhed. Det er som at skifte gear i bilen - fra høj alarm tilbage til blød ro.",
            fagfolk: "TRE faciliterer polyvagal regulering fra sympatisk/dorsal tilstand til ventral vagal sikkerhed gennem proprioceptiv stimulation og neuroceptive signaler.",
            videnskab: "Neurogen tremor modulerer vagal efferens og nedregulerer amygdala-respons via brainstem circuits, faciliterende shift fra defensive til social engagement states."
        },
        'tre-narrative': {
            klient: "Når din krop tremorer og finder ro, kan du fortælle en ny historie om dig selv: 'Jeg er sikker', 'Min krop ved hvordan'. Nye kropsfornemmelser skaber nye selvforståelser.",
            fagfolk: "Somatisk transformation gennem TRE faciliterer narrativ re-authoring uden verbal processing. State-change åbner for nye autobiografiske konstruktioner.",
            videnskab: "TRE-induceret autonomt nervesystem-regulering modificerer state-dependent narrative retrieval og faciliterer memory reconsolidation gennem hippocampal-prefrontal interaktion."
        },
        'tre-enactivisme': {
            klient: "Hver gang du tremorer, skaber din krop aktivt ny viden om hvordan den kan regulere sig selv. Du lærer gennem at gøre, ikke gennem at tænke.",
            fagfolk: "TRE er enactment af ny sensomotorisk organisation, ikke ekstraktion af 'lagret' materiale. Tremor er aktiv bringing-forth af ny kompetence.",
            videnskab: "Tremor faciliterer autopoietisk reorganisering gennem perturbation af eksisterende sensomotoriske attraktorer. Ny koordination emergerer gennem embodied action, ikke information-processing."
        },
        'tre-levine': {
            klient: "Tremor hjælper kroppen med at fuldføre den kamp- eller flugt-reaktion der blev afbrudt under stress. Som at fuldføre en sætning der blev afbrudt.",
            fagfolk: "TRE faciliterer completion af incomplete defensive responses via neurogen discharge. Metoden komplementerer SE's titration og pendulering.",
            videnskab: "Tremor aktiverer completion af motoriske programmer gennem periaqueductal gray (PAG) og central pattern generators, resolverende frozen defensive states."
        },
        'tre-reich': {
            klient: "Tremor hjælper de spændte muskler med at slippe gamle beskyttelsesmønstre, så energi kan flyde. Panseret får lov til at smelte.",
            fagfolk: "TRE mildner character armor gennem neurogen tremor, restaurerende energetisk flow og reducerende kronisk muskulær holding.",
            videnskab: "Tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation, modificerende både fascial visco-elasticitet og proprioceptiv signalering."
        },
        'tre-psykologi': {
            klient: "Med en tryg terapeut kan din krop turde tremor - sikkerhed i relationen muliggør healing i kroppen. Du er ikke alene i processen.",
            fagfolk: "Terapeutisk alliance og co-regulering faciliterer TRE's effectiveness gennem neuroceptiv sikkerhed. Provider holder safe container for somatisk processing.",
            videnskab: "Providers regulerede autonome tilstand co-regulerer klient via social engagement system og interbrain synchrony, sikrende ventral vagal support under tremor."
        },
        'polyvagal-narrative': {
            klient: "Når nervesystemet skifter til sikker tilstand, bliver nye måder at tænke om dig selv mulige. Fra 'jeg er i fare' til 'jeg er OK'.",
            fagfolk: "Autonomt nervesystem-tilstand (polyvagal) påvirker hvilken narrativ der kan konstrueres og tilgås. Ventral vagal åbner for fleksibel self-authoring.",
            videnskab: "Autonomt nervesystem-tilstand modulerer hippocampal consolidation og præfrontal narrative integration. State-dependent memory betyder narrativ tilgængelighed varierer med vagal tone."
        },
        'polyvagal-enactivisme': {
            klient: "Din oplevelse af sikkerhed eller fare skabes aktivt af dig - ikke bare registreret passivt. Du deltager i at skabe din virkelighed.",
            fagfolk: "Neuroception (Porges) er enactive perception - aktiv bringing-forth af betydning, ikke passiv detektion. Perception og response co-emerge.",
            videnskab: "Polyvagal neuroception demonstrerer enactive princip: autonomic evaluation og environmental response co-constitute gennem continuous sensorimotor coupling."
        },
        'polyvagal-levine': {
            klient: "Systemet skal først være i sikker tilstand før den afbrudte stress-reaktion kan fuldføres. Først sikkerhed, så fuldførelse.",
            fagfolk: "Ventral vagal aktivering er forudsætning for sikker completion af incomplete defensive responses (Levine). Polyvagal fundament for SE.",
            videnskab: "Polyvagal state hierarchy: freeze-discharge sekvens kræver sufficient ventral vagal tone for sikker mobilisering. Completion uden ventral support risikerer re-traumatisering."
        },
        'polyvagal-reich': {
            klient: "Muskulært panser er kroppens måde at blive i alarm-tilstand - tremor hjælper tilbage til ro. Panseret ER nervesystem-tilstanden.",
            fagfolk: "Character armor (Reich) manifesterer kronisk sympatisk aktivering eller dorsal immobilisering (Porges). Armor er somatisk embodiment af defensive states.",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem - myofascial holding patterns vedligeholder og reflekterer non-ventral vagal states."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro - sikkerhed smitter relationelt. Nervesystemer taler sammen.",
            fagfolk: "Terapeutens ventral vagal tilstand co-regulerer klientens nervesystem gennem social engagement. Embodied presence er ikke metafor men mekanisme.",
            videnskab: "Provider's autonomic state influences client's via ventral vagal pathways - interpersonal neurobiological synchrony gennem prosody, facial expression, og autonomic resonance."
        },
        'narrative-enactivisme': {
            klient: "Din livshistorie skabes ikke kun i hovedet men gennem hvordan du lever og handler i verden. Du skriver din historie gennem at leve den.",
            fagfolk: "Narrativ identitet er autopoietisk - kontinuerligt enacted gennem lived experience, ikke statisk lagret. Self er emergent process, ikke stored structure.",
            videnskab: "Narrative self emergerer gennem sensomotorisk enactment - autobiografisk memory er dynamisk reconstruction gennem current embodied state, ikke arkival retrieval."
        },
        'narrative-levine': {
            klient: "Når kroppen fuldender stress-reaktionen, kan historien om 'hvad der skete' også ændre sig. Completion ændrer mening.",
            fagfolk: "Completion af traumatisk respons (Levine) åbner for narrativ transformation. Når 'frozen' energy resolves, kan historien bevæge sig videre.",
            videnskab: "Somatic completion modificerer episodic memory encoding. Traumatic narrative loses its 'frozen', intrusive quality når defensive response completeres, faciliterende memory reconsolidation."
        },
        'narrative-reich': {
            klient: "Hvordan du holder kroppen fortæller historien om 'hvem du må være' - tremor ændrer begge dele. Kroppen ER din historie.",
            fagfolk: "Character armor (Reich) embodier narrativ identitet. Muskulær holding bærer implicit selv-historie - somatisk struktur som autobiography.",
            videnskab: "Myofascial patterns encode implicit autobiographical memory. Somatic armor IS embodied narrative structure - self-story lived gennem postural og proprioceptive patterns."
        },
        'narrative-psykologi': {
            klient: "En god terapeut hjælper dig med at fortælle din historie på nye måder - du er medforfatter, ikke bare fortæller.",
            fagfolk: "Terapeutisk relation faciliterer narrativ re-authoring. Terapeut holder rum for transformativ storytelling - witness og co-constructor.",
            videnskab: "Therapeutic narrative co-construction modulates autobiographical memory reconsolidation gennem social engagement. Interpersonal context shapes memory encoding og retrieval."
        },
        'enactivisme-levine': {
            klient: "Kroppen lærer gennem at gøre - ikke ved at tænke over. Tremor ER læringen, ikke forberedelsen til læring.",
            fagfolk: "Levines pendulering er cirkulær enactment - ikke lineær discharge men kontinuerlig reorganisering. Perception-action cycle som healing.",
            videnskab: "SE completion demonstrerer enactive principle: perception-action loops reorganize gennem embodied engagement. Healing emergerer gennem sensorimotor cycling, ikke information-processing."
        },
        'enactivisme-reich': {
            klient: "Panseret er ikke noget 'lagret' - det er noget du aktivt gør hver dag. Tremor lærer nye mønstre i stedet.",
            fagfolk: "Character armor er ikke statisk struktur men kontinuerlig autopoietisk 'holding pattern'. Aktiv selvbegrænsning, ikke passive rest.",
            videnskab: "Reichian armor er dynamisk process, ikke static structure. Autopoietic maintenance af defensive sensomotorisk organization gennem kontinuerlig muscular tonus regulation."
        },
        'enactivisme-psykologi': {
            klient: "Terapeut og klient skaber sammen et rum hvor ny måde at være kan opstå - ikke overførsel men fællesskabelse.",
            fagfolk: "Healing er co-enactment. Terapeut og klient bringer sammen emergent organisation frem gennem relationel coupling, ikke transmission.",
            videnskab: "Therapeutic dyad constitutes autopoietic system. Healing emerges gennem structural coupling - bidirectional influence creating novel organization irreducible til individuelle komponenter."
        },
        'levine-reich': {
            klient: "Den afbrudte flugt-reaktion og det muskulære panser er to sider af samme sag - begge holder fast i stedet for at slippe.",
            fagfolk: "Levines incomplete response og Reichs frozen energy beskriver samme fænomen fra forskellige vinkler. Sympatisk mobilisering uden discharge.",
            videnskab: "SE incompletion og bioenergetisk armor refererer begge til sustained brainstem defensive activation uden resolution. Myofascial holding embodier incomplete fight/flight."
        },
        'levine-psykologi': {
            klient: "Kun i et trygt rum kan kroppen turde fuldføre den stress-reaktion den holder tilbage. Relation muliggør frigivelse.",
            fagfolk: "Titration og pendulering (Levine) kræver terapeutisk co-regulering. Sikker base for at bevæge gennem activation uden at blive overwhelmed.",
            videnskab: "SE methodology requires therapeutic containment. Pendulation mellem activation/deactivation necessitates relational safety - terapeut fungerer som external regulator."
        },
        'reich-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i kroppen for at hjælpe dig. Energi og spænding resonerer mellem jer.",
            fagfolk: "Terapeutens embodiment påvirker klientens. Bioenergetisk resonans er ikke metafor men faktisk co-regulering gennem embodied presence.",
            videnskab: "Provider's somatic state influences client via mirror neurons og autonomic synchrony. Embodied countertransference - terapeuts muscular holding patterns affect client's nervous system."
        }
    }
};

// State management
let currentMode = 'klient';
let activeElement = null;
let tourActive = false;
let tourStep = 0;

// Complete tour sequence - all 6 circles + all 30 connections
const tourSequence = [
    // Start with TRE center
    { type: 'circle', id: 'tre', duration: 4000 },
    
    // First ring - TRE to all 6 perspectives
    { type: 'connection', from: 'tre', to: 'polyvagal', duration: 3000 },
    { type: 'circle', id: 'polyvagal', duration: 3500 },
    { type: 'connection', from: 'tre', to: 'narrative', duration: 3000 },
    { type: 'circle', id: 'narrative', duration: 3500 },
    { type: 'connection', from: 'tre', to: 'enactivisme', duration: 3000 },
    { type: 'circle', id: 'enactivisme', duration: 3500 },
    { type: 'connection', from: 'tre', to: 'levine', duration: 3000 },
    { type: 'circle', id: 'levine', duration: 3500 },
    { type: 'connection', from: 'tre', to: 'reich', duration: 3000 },
    { type: 'circle', id: 'reich', duration: 3500 },
    { type: 'connection', from: 'tre', to: 'psykologi', duration: 3000 },
    { type: 'circle', id: 'psykologi', duration: 3500 },
    
    // Second ring - connections between outer circles
    { type: 'connection', from: 'polyvagal', to: 'narrative', duration: 3000 },
    { type: 'connection', from: 'polyvagal', to: 'enactivisme', duration: 3000 },
    { type: 'connection', from: 'polyvagal', to: 'levine', duration: 3000 },
    { type: 'connection', from: 'polyvagal', to: 'reich', duration: 3000 },
    { type: 'connection', from: 'polyvagal', to: 'psykologi', duration: 3000 },
    
    { type: 'connection', from: 'narrative', to: 'enactivisme', duration: 3000 },
    { type: 'connection', from: 'narrative', to: 'levine', duration: 3000 },
    { type: 'connection', from: 'narrative', to: 'reich', duration: 3000 },
    { type: 'connection', from: 'narrative', to: 'psykologi', duration: 3000 },
    
    { type: 'connection', from: 'enactivisme', to: 'levine', duration: 3000 },
    { type: 'connection', from: 'enactivisme', to: 'reich', duration: 3000 },
    { type: 'connection', from: 'enactivisme', to: 'psykologi', duration: 3000 },
    
    { type: 'connection', from: 'levine', to: 'reich', duration: 3000 },
    { type: 'connection', from: 'levine', to: 'psykologi', duration: 3000 },
    
    { type: 'connection', from: 'reich', to: 'psykologi', duration: 3000 }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    setupTourButton();
});

// Mode selector
function setupModeButtons() {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode;
            if (activeElement) {
                updateInfoPanel(activeElement);
            }
        });
    });
}

// Circle interactions
function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            if (tourActive) return;
            
            const id = circle.dataset.id;
            clearActive();
            circle.classList.add('active');
            activeElement = { type: 'circle', id: id };
            updateInfoPanel(activeElement);
        });
    });
}

// Connection interactions
function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', () => {
            if (tourActive) return;
            
            const from = line.dataset.from;
            const to = line.dataset.to;
            
            // Check if this connection exists in our content
            const key1 = `${from}-${to}`;
            const key2 = `${to}-${from}`;
            
            if (!content.connections[key1] && !content.connections[key2]) {
                console.log('No content for connection:', key1);
                return;
            }
            
            clearActive();
            line.classList.add('active');
            activeElement = { type: 'connection', from: from, to: to };
            updateInfoPanel(activeElement);
        });
        
        // Add hover effect
        line.style.cursor = 'pointer';
    });
}

// Update info panel
function updateInfoPanel(element) {
    const infoContent = document.getElementById('info-content');
    
    if (element.type === 'circle') {
        const data = content.circles[element.id][currentMode];
        infoContent.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.text}</p>
        `;
    } else if (element.type === 'connection') {
        // Try both orderings
        const key1 = `${element.from}-${element.to}`;
        const key2 = `${element.to}-${element.from}`;
        const connectionData = content.connections[key1] || content.connections[key2];
        
        if (!connectionData) {
            infoContent.innerHTML = `
                <h2>Forbindelse ikke fundet</h2>
                <p>Denne dynamik er ikke implementeret endnu.</p>
            `;
            return;
        }
        
        const text = connectionData[currentMode];
        const fromTitle = element.from.charAt(0).toUpperCase() + element.from.slice(1);
        const toTitle = element.to.charAt(0).toUpperCase() + element.to.slice(1);
        
        infoContent.innerHTML = `
            <h2>Dynamik: ${fromTitle} ↔ ${toTitle}</h2>
            <p><strong>${text}</strong></p>
            <p style="margin-top: 20px; font-size: 0.95rem; color: #718096;">
                Klik på cirklerne for at lære mere om hvert perspektiv individuelt.
            </p>
        `;
    }
}

// Clear active states
function clearActive() {
    document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}

// Tour functionality
function setupTourButton() {
    const tourBtn = document.getElementById('start-tour');
    tourBtn.addEventListener('click', () => {
        if (tourActive) return;
        startTour();
    });
}

function startTour() {
    tourActive = true;
    tourStep = 0;
    const tourBtn = document.getElementById('start-tour');
    tourBtn.textContent = 'Gennemgang kører...';
    tourBtn.disabled = true;
    tourBtn.style.opacity = '0.6';
    runTourStep();
}

function runTourStep() {
    if (tourStep >= tourSequence.length) {
        endTour();
        return;
    }
    
    const step = tourSequence[tourStep];
    clearActive();
    
    if (step.type === 'circle') {
        const circle = document.querySelector(`[data-id="${step.id}"]`);
        if (circle) {
            circle.classList.add('active');
            circle.classList.add('highlight');
            activeElement = { type: 'circle', id: step.id };
            updateInfoPanel(activeElement);
            
            setTimeout(() => {
                circle.classList.remove('highlight');
            }, 1000);
        }
        
    } else if (step.type === 'connection') {
        // Try both directions
        let connection = document.querySelector(`[data-from="${step.from}"][data-to="${step.to}"]`);
        if (!connection) {
            connection = document.querySelector(`[data-from="${step.to}"][data-to="${step.from}"]`);
        }
        
        if (connection) {
            connection.classList.add('active');
            connection.classList.add('highlight');
            activeElement = { type: 'connection', from: step.from, to: step.to };
            updateInfoPanel(activeElement);
            
            setTimeout(() => {
                connection.classList.remove('highlight');
            }, 800);
        }
    }
    
    setTimeout(() => {
        tourStep++;
        runTourStep();
    }, step.duration);
}

function endTour() {
    tourActive = false;
    tourStep = 0;
    const tourBtn = document.getElementById('start-tour');
    tourBtn.textContent = 'Start guidet gennemgang';
    tourBtn.disabled = false;
    tourBtn.style.opacity = '1';
    clearActive();
    activeElement = null;
    document.getElementById('info-content').innerHTML = `
        <h2>Gennemgang afsluttet</h2>
        <p>Du har nu set alle 6 perspektiver og alle 30 dynamikker mellem dem.</p>
        <p>Du kan udforske modellen frit ved at klikke på cirklerne og de stiplede linjer.</p>
        <p style="margin-top: 20px;">Skift mellem de tre forståelsesniveauer øverst for at se forskellige dybder af forklaring.</p>
    `;
}
