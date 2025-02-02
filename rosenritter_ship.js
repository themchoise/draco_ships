const ships= [
    {
      "name": "Silberblut Regalia Kfg.A",
      "id": "tahlan_stahlherz",
      "designation": "Mobile Armor",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_rrskimmer",
      "fleet pts": 15,
      "hitpoints": 5000,
      "armor rating": 1100,
      "max flux": 8000,
      "8/6/5/4%": "",
      "flux dissipation": 500,
      "ordnance points": 60,
      "fighter bays": "",
      "max speed": 65,
      "acceleration": 80,
      "deceleration": 80,
      "max turn rate": 40,
      "turn acceleration": 60,
      "mass": 450,
      "shield type": "FRONT",
      "defense id": "",
      "shield arc": 360,
      "shield upkeep": 0.3,
      "shield efficiency": 0.9,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 20,
      "max crew": 40,
      "cargo": 70,
      "fuel": 70,
      "fuel/ly": 3,
      "range": 28,
      "max burn": 9,
      "base value": 200000,
      "cr %/day": 5,
      "CR to deploy": 15,
      "peak CR sec": 420,
      "CR loss/sec": 0.25,
      "supplies/rec": 22,
      "supplies/mo": 22,
      "hints": "HIDE_IN_CODEX",
      "tags": "tahlan_silberherz_bp, no_dealer",
      "rarity": "",
      "breakProb": 0.4,
      "minPieces": 2,
      "maxPieces": 3,
      "travel drive": "",
      "number": 13464
    },
    {
      "name": "Halbmond",
      "id": "tahlan_halbmond",
      "designation": "Support Carrier",
      "tech/manufacturer": "Rosenritter",
      "system id": "targetingfeed",
      "fleet pts": 24,
      "hitpoints": 12000,
      "armor rating": 800,
      "max flux": 11000,
      "8/6/5/4%": "",
      "flux dissipation": 400,
      "ordnance points": 220,
      "fighter bays": 4,
      "max speed": 40,
      "acceleration": 30,
      "deceleration": 24,
      "max turn rate": 10,
      "turn acceleration": 10,
      "mass": 3200,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 180,
      "shield upkeep": 0.3,
      "shield efficiency": 1,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 500,
      "max crew": 1200,
      "cargo": 600,
      "fuel": 600,
      "fuel/ly": 9,
      "range": 50,
      "max burn": 8,
      "base value": 400000,
      "cr %/day": 5,
      "CR to deploy": 15,
      "peak CR sec": 720,
      "CR loss/sec": 0.25,
      "supplies/rec": 40,
      "supplies/mo": 40,
      "hints": "CARRIER, NO_AUTO_ESCORT, HIDE_IN_CODEX",
      "tags": "tahlan_halbmond_bp, no_dealer",
      "rarity": "",
      "breakProb": 0.4,
      "minPieces": 2,
      "maxPieces": 4,
      "travel drive": "",
      "number": 12121
    },
    {
      "name": "Mondlicht",
      "id": "tahlan_mondlicht",
      "designation": "Cruiser",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_weaponstabilization",
      "fleet pts": 14,
      "hitpoints": 8000,
      "armor rating": 900,
      "max flux": 10000,
      "8/6/5/4%": "",
      "flux dissipation": 400,
      "ordnance points": 150,
      "fighter bays": 2,
      "max speed": 70,
      "acceleration": 50,
      "deceleration": 30,
      "max turn rate": 16,
      "turn acceleration": 25,
      "mass": 1200,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 180,
      "shield upkeep": 0.3,
      "shield efficiency": 0.9,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 170,
      "max crew": 380,
      "cargo": 150,
      "fuel": 100,
      "fuel/ly": 3,
      "range": 33,
      "max burn": 8,
      "base value": 150000,
      "cr %/day": 3,
      "CR to deploy": 12,
      "peak CR sec": 480,
      "CR loss/sec": 0.25,
      "supplies/rec": 18,
      "supplies/mo": 18,
      "hints": "HIDE_IN_CODEX",
      "tags": "tahlan_schneefall_bp, no_dealer",
      "rarity": "",
      "breakProb": 0.5,
      "minPieces": 2,
      "maxPieces": 3,
      "travel drive": "",
      "number": 401
    },
    {
      "name": "TraumtÃ¤nzer",
      "id": "tahlan_schneefall_traum",
      "designation": "Battlecruiser",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_rrskimmer",
      "fleet pts": 26,
      "hitpoints": 13000,
      "armor rating": 900,
      "max flux": 16000,
      "8/6/5/4%": "",
      "flux dissipation": 900,
      "ordnance points": 320,
      "fighter bays": "",
      "max speed": 60,
      "acceleration": 90,
      "deceleration": 60,
      "max turn rate": 13,
      "turn acceleration": 20,
      "mass": 2800,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 180,
      "shield upkeep": 0.3,
      "shield efficiency": 1,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 600,
      "max crew": 1000,
      "cargo": 300,
      "fuel": 400,
      "fuel/ly": 12,
      "range": 33,
      "max burn": 8,
      "base value": 900000,
      "cr %/day": 3,
      "CR to deploy": 15,
      "peak CR sec": 600,
      "CR loss/sec": 0.25,
      "supplies/rec": 60,
      "supplies/mo": 60,
      "hints": "HIDE_IN_CODEX, WEAPONS_FRONT_TO_BACK",
      "tags": "no_dealer",
      "rarity": "",
      "breakProb": 0.5,
      "minPieces": 2,
      "maxPieces": 5,
      "travel drive": "",
      "number": 11311
    },
    {
      "name": "Dorn",
      "id": "tahlan_dorn",
      "designation": "Funnel",
      "tech/manufacturer": "Rosenritter",
      "system id": "",
      "fleet pts": "",
      "hitpoints": 200,
      "armor rating": 50,
      "max flux": 100,
      "8/6/5/4%": "",
      "flux dissipation": 10,
      "ordnance points": "",
      "fighter bays": "",
      "max speed": 500,
      "acceleration": 500,
      "deceleration": 500,
      "max turn rate": 100,
      "turn acceleration": 200,
      "mass": 10,
      "shield type": "NONE",
      "defense id": "",
      "shield arc": 90,
      "shield upkeep": 0,
      "shield efficiency": 1,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 0,
      "max crew": 0,
      "cargo": "",
      "fuel": "",
      "fuel/ly": "",
      "range": "",
      "max burn": "",
      "base value": "",
      "cr %/day": "",
      "CR to deploy": "",
      "peak CR sec": "",
      "CR loss/sec": "",
      "supplies/rec": "",
      "supplies/mo": "",
      "hints": "HIDE_IN_CODEX",
      "tags": "no_dealer",
      "rarity": "",
      "breakProb": 0,
      "minPieces": "",
      "maxPieces": "",
      "travel drive": "",
      "number": 454
    },
    {
      "name": "Glanzwurf Regalia Kfg.A",
      "id": "tahlan_glanzwurf",
      "designation": "Mobile Armor",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_plasmarounds",
      "fleet pts": 8,
      "hitpoints": 2000,
      "armor rating": 500,
      "max flux": 3500,
      "8/6/5/4%": "",
      "flux dissipation": 300,
      "ordnance points": 30,
      "fighter bays": 1,
      "max speed": 100,
      "acceleration": 120,
      "deceleration": 100,
      "max turn rate": 70,
      "turn acceleration": 90,
      "mass": 200,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 360,
      "shield upkeep": 0.3,
      "shield efficiency": 0.8,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 10,
      "max crew": 20,
      "cargo": 30,
      "fuel": 20,
      "fuel/ly": 1,
      "range": 20,
      "max burn": 10,
      "base value": 38000,
      "cr %/day": 10,
      "CR to deploy": 20,
      "peak CR sec": 240,
      "CR loss/sec": 0.25,
      "supplies/rec": 8,
      "supplies/mo": 8,
      "hints": "HIDE_IN_CODEX",
      "tags": "tahlan_jagd_bp, no_dealer",
      "rarity": "",
      "breakProb": 0.5,
      "minPieces": 2,
      "maxPieces": 2,
      "travel drive": "",
      "number": 206
    },
    {
      "name": "Nachtgesang",
      "id": "tahlan_schneefall",
      "designation": "Battlecruiser",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_weaponstabilization",
      "fleet pts": 26,
      "hitpoints": 13000,
      "armor rating": 1200,
      "max flux": 18000,
      "8/6/5/4%": "",
      "flux dissipation": 900,
      "ordnance points": 320,
      "fighter bays": 2,
      "max speed": 60,
      "acceleration": 90,
      "deceleration": 60,
      "max turn rate": 13,
      "turn acceleration": 20,
      "mass": 2800,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 180,
      "shield upkeep": 0.3,
      "shield efficiency": 0.9,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 600,
      "max crew": 1000,
      "cargo": 300,
      "fuel": 400,
      "fuel/ly": 12,
      "range": 33,
      "max burn": 8,
      "base value": 600000,
      "cr %/day": 3,
      "CR to deploy": 15,
      "peak CR sec": 720,
      "CR loss/sec": 0.25,
      "supplies/rec": 45,
      "supplies/mo": 45,
      "hints": "HIDE_IN_CODEX, WEAPONS_FRONT_TO_BACK",
      "tags": "tahlan_schneefall_bp, no_dealer",
      "rarity": "",
      "breakProb": 0.5,
      "minPieces": 2,
      "maxPieces": 5,
      "travel drive": "",
      "number": 11311
    },
    {
      "name": "Kupferflug",
      "id": "tahlan_kupferflug",
      "designation": "Mobile Armor",
      "tech/manufacturer": "Rosenritter",
      "system id": "",
      "fleet pts": "",
      "hitpoints": 300,
      "armor rating": 150,
      "max flux": 400,
      "8/6/5/4%": "",
      "flux dissipation": 100,
      "ordnance points": "",
      "fighter bays": "",
      "max speed": 140,
      "acceleration": 90,
      "deceleration": 90,
      "max turn rate": 60,
      "turn acceleration": 100,
      "mass": 30,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 360,
      "shield upkeep": 0,
      "shield efficiency": 1,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 3,
      "max crew": 3,
      "cargo": "",
      "fuel": "",
      "fuel/ly": "",
      "range": "",
      "max burn": "",
      "base value": "",
      "cr %/day": "",
      "CR to deploy": "",
      "peak CR sec": "",
      "CR loss/sec": "",
      "supplies/rec": "",
      "supplies/mo": "",
      "hints": "HIDE_IN_CODEX",
      "tags": "no_dealer",
      "rarity": "",
      "breakProb": 0,
      "minPieces": "",
      "maxPieces": "",
      "travel drive": "",
      "number": 454
    },
    {
      "name": "Eisenflug",
      "id": "tahlan_eisenflug",
      "designation": "Mobile Armor",
      "tech/manufacturer": "Rosenritter",
      "system id": "tahlan_rrskimmer",
      "fleet pts": "",
      "hitpoints": 300,
      "armor rating": 150,
      "max flux": 500,
      "8/6/5/4%": "",
      "flux dissipation": 100,
      "ordnance points": "",
      "fighter bays": "",
      "max speed": 160,
      "acceleration": 100,
      "deceleration": 100,
      "max turn rate": 60,
      "turn acceleration": 100,
      "mass": 30,
      "shield type": "OMNI",
      "defense id": "",
      "shield arc": 360,
      "shield upkeep": 0,
      "shield efficiency": 1,
      "phase cost": "",
      "phase upkeep": "",
      "min crew": 3,
      "max crew": 3,
      "cargo": "",
      "fuel": "",
      "fuel/ly": "",
      "range": "",
      "max burn": "",
      "base value": "",
      "cr %/day": "",
      "CR to deploy": "",
      "peak CR sec": "",
      "CR loss/sec": "",
      "supplies/rec": "",
      "supplies/mo": "",
      "hints": "HIDE_IN_CODEX",
      "tags": "no_dealer",
      "rarity": "",
      "breakProb": 0,
      "minPieces": "",
      "maxPieces": "",
      "travel drive": "",
      "number": 454
    }
  ]

  export default ships