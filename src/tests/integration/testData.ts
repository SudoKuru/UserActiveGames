

class testData {

    static expiredAccessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhoSldIRklrSWJuYlZWRGtOclY5MSJ9.eyJpc3MiOiJodHRwczovL2Rldi0yYTJjZngwN2kwanc2amdqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzk0NDBjOGYyOTA2Nzc1MDc5YzcyNTQiLCJhdWQiOiJCYWNrZW5kRGV2IiwiaWF0IjoxNjc3Mzg2NzM2LCJleHAiOjE2Nzc0NzMxMzYsImF6cCI6ImhPSUdJa05FRlF3TFBtOTRYb0tSeWtPRGZCQUY0dTNGIiwic2NvcGUiOiJjcmVhdGU6c3Vkb2t1X3B1enpsZSB1cGRhdGU6c3Vkb2t1X3B1enpsZSBkZWxldGU6c3Vkb2t1X3B1enpsZSIsImd0eSI6InBhc3N3b3JkIiwicGVybWlzc2lvbnMiOlsiY3JlYXRlOnN1ZG9rdV9wdXp6bGUiLCJkZWxldGU6c3Vkb2t1X3B1enpsZSIsInVwZGF0ZTpzdWRva3VfcHV6emxlIl19.AGa61NnI_hmpBNhRt2qbmpAGxCFd8Cpm6k0IqVyuwxfQwaOV-1uKDO5yC6sl_ahl_rjM_0fTRBo2nVwyxrv1VDbF75piY-EOVcq_-dUzRv5vkPg-3zfBIfNz8jmpD9SctOFUkRYyChYHxrUr0qcEldZgc2tyTs2oFoZV31izRHQXxQhuz9Jxoh9jbVIj091BMz91OT7wml3GlVptjWlgPBt_a3gd5Ag4uUANJsfR0waXmXorkTQE5QoGcfx9WmPYVC4whTV3KLjoQpRF5fwQW2GRic4I3Udkc8D62zrD-vAzpPd9MKMtjq5h9VwVUu_qfEFuoUTVdSCH8XlVhSGQnA';

    /*
     * JSON Expected Error Responses
     */

    static ErrorMessage400 = {
        Error_Message: 'Invalid Request',
        Status: 400
    };

    static ErrorMessage401 = {
        Error_Message: 'Invalid Permission',
        Status: 401
    };

    static ErrorMessage500 = {
        Error_Message: 'Invalid Permission',
        Status: 401
    };

    /*
     * Valid active puzzles and corresponding responses
     */

    static activePuzzle1 = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static activePuzzle1Response = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "currentTime": 0,
        "moves": [],
        "numHintsAskedFor": 0,
        "numWrongCellsPlayed": 0,
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle2 = {
        "userID": "Thomas",
        "puzzle": "030000506000098071000000490009800000002010000380400609800030960100000004560982030",
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": "030000506000098071000000490009800000002010000380400609800030960100000004560982130",
            "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000"
        },{
            "puzzleCurrentState": "030000506000098071000000490009800000002010000380400609800030960103000004560982130",
            "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 0,
            "HIDDEN_SINGLE": 1,
            "NAKED_PAIR": 2,
            "NAKED_TRIPLET": 6,
            "NAKED_QUADRUPLET": 7,
            "NAKED_QUINTUPLET": 5,
            "NAKED_SEXTUPLET": 7,
            "NAKED_SEPTUPLET": 8,
            "NAKED_OCTUPLET": 3,
            "HIDDEN_PAIR": 9,
            "HIDDEN_TRIPLET": 22,
            "HIDDEN_QUADRUPLET": 44,
            "HIDDEN_QUINTUPLET": 6,
            "HIDDEN_SEXTUPLET": 82,
            "HIDDEN_SEPTUPLET": 44,
            "HIDDEN_OCTUPLET": 1,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 0,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        }
    };

    static activePuzzle2Response = {
        "userID": "Thomas",
        "puzzle": "030000506000098071000000490009800000002010000380400609800030960100000004560982030",
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": "030000506000098071000000490009800000002010000380400609800030960100000004560982130",
            "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000",
            "_id": "ID"
        },{
            "puzzleCurrentState": "030000506000098071000000490009800000002010000380400609800030960103000004560982130",
            "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000",
            "_id": "ID"
        }
        ],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 0,
            "HIDDEN_SINGLE": 1,
            "NAKED_PAIR": 2,
            "NAKED_TRIPLET": 6,
            "NAKED_QUADRUPLET": 7,
            "NAKED_QUINTUPLET": 5,
            "NAKED_SEXTUPLET": 7,
            "NAKED_SEPTUPLET": 8,
            "NAKED_OCTUPLET": 3,
            "HIDDEN_PAIR": 9,
            "HIDDEN_TRIPLET": 22,
            "HIDDEN_QUADRUPLET": 44,
            "HIDDEN_QUINTUPLET": 6,
            "HIDDEN_SEXTUPLET": 82,
            "HIDDEN_SEPTUPLET": 44,
            "HIDDEN_OCTUPLET": 1,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 0,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        },
        "_id": "ID",
        "__v": 0
    };

    /*
     * Invalid Active Puzzles
     */

    static userIDNotPresent = {
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static userIDBlank = {
        "userID": "",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static userIDIsInt = {
        "userID": 5,
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static puzzleNotPresent = {
        "userID": "Thomas",
    };

    static puzzleBlank = {
        "userID": "Thomas",
        "puzzle": "",
    };

    static puzzleIsTooLong = {
        "userID": "Thomas",
        "puzzle": "3310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static puzzleIsTooShort = {
        "userID": "Thomas",
        "puzzle": "10084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static puzzleHasInvalidCharacter = {
        "userID": "Thomas",
        "puzzle": "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500",
    };

    static currentTimeIsNotInteger = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "currentTime": "Banana"
    };

    static puzzleCurrentStateIsTooLong = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "moves": [{
            "puzzleCurrentState": "3310084002200150006570003010423708095760030000009562030050006070007000900000001500"
        }]
    };

    static puzzleCurrentStateIsTooShort = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "moves": [{
            "puzzleCurrentState": "10084002200150006570003010423708095760030000009562030050006070007000900000001500"
        }]
    };

    static puzzleCurrentStateHasInvalidCharacter = {
        "userID": "Thomas",
        "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "moves": [{
            "puzzleCurrentState": "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500"
        }]
    };
}

export { testData };


