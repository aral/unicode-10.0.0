module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,153,201,149,237,56,12,67,19,170,133,53,113,136,229,159,206,63,141,230,5,222,194,224,43,155,132,105,17,150,40,215,191,140,250,203,232,191,204,111,142,53,199,158,227,204,113,231,120,115,196,28,57,199,248,229,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,213,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,245,248,117,255,213,247,205,177,230,216,115,156,57,238,28,111,142,152,35,231,168,57,198,111,141,223,26,191,53,126,107,252,214,248,173,241,91,227,183,198,111,141,223,26,191,61,126,123,252,246,248,237,241,219,227,183,199,111,143,223,30,191,61,126,123,252,206,248,157,241,59,227,119,198,239,140,223,25,191,51,126,103,252,206,248,157,241,187,227,119,199,239,142,223,29,191,59,126,119,252,238,248,221,241,187,227,119,199,239,141,223,27,191,55,126,111,252,222,248,189,241,123,227,247,198,239,141,223,27,191,24,191,24,191,24,191,24,191,24,191,24,191,24,191,24,191,169,71,77,61,106,234,81,83,143,154,122,212,212,163,166,30,53,245,168,169,71,77,61,106,234,81,83,143,181,230,38,3,1,36,80,0,23,230,78,3,235,111,221,121,254,129,0,18,40,96,92,238,12,194,0,46,51,12,3,7,184,0,17,135,136,67,196,33,226,16,113,137,184,68,92,34,46,17,151,136,75,196,37,226,18,113,137,184,68,60,34,30,17,143,136,71,196,35,130,196,47,137,95,18,191,36,126,73,252,146,248,85,226,65,68,16,17,68,4,17,65,68,16,17,68,4,17,137,115,226,151,248,37,46,137,11,35,244,184,239,227,190,143,251,62,238,251,184,239,227,190,143,251,62,238,251,184,239,227,190,143,251,198,168,109,64,191,14,112,129,7,4,144,64,1,19,27,35,187,1,34,54,17,155,136,77,4,99,31,140,125,48,246,193,216,7,99,31,140,125,48,246,193,88,37,195,148,12,83,146,110,146,110,146,110,146,110,146,110,146,100,146,100,146,100,146,100,50,56,201,224,36,67,194,219,188,120,149,23,239,242,226,101,94,188,205,139,87,104,161,229,133,152,23,106,94,200,121,161,231,133,160,23,138,94,72,122,161,233,133,168,23,170,94,200,122,161,235,133,176,23,202,94,72,123,161,237,133,184,23,234,94,200,123,161,239,133,192,23,10,95,72,124,161,241,133,200,23,42,95,141,115,227,220,56,55,206,141,115,227,220,56,55,206,45,103,30,171,231,177,246,55,227,55,160,95,61,48,227,55,176,128,13,28,224,2,111,32,185,154,92,77,174,38,87,83,23,2,128,42,161,74,168,10,231,194,185,112,46,156,11,231,194,185,112,46,252,26,191,198,175,241,155,105,109,175,121,63,6,10,24,151,61,79,52,176,128,13,28,224,2,15,8,32,129,2,136,32,211,77,166,155,76,55,153,110,50,221,100,186,201,116,147,233,38,211,77,166,155,76,55,153,110,50,221,5,61,233,110,210,221,164,187,139,8,114,222,228,188,201,121,147,243,38,231,221,68,52,17,77,68,19,209,68,204,132,188,207,204,200,3,11,216,192,1,46,240,128,137,56,60,219,225,177,14,143,112,120,132,195,35,28,30,225,240,8,39,185,202,115,28,158,227,144,243,33,201,83,250,51,129,2,32,32,201,67,146,151,91,94,110,201,100,180,47,57,95,210,189,36,121,73,242,146,228,35,201,247,241,107,1,136,225,33,6,222,223,205,251,187,121,37,55,175,223,230,245,219,188,106,3,92,64,32,113,116,110,72,227,114,129,196,131,196,131,17,15,178,10,178,202,121,23,54,111,227,230,109,220,188,141,155,183,113,32,129,241,227,149,28,224,2,207,198,42,184,89,174,54,235,213,102,193,218,172,88,155,37,107,179,102,109,22,172,205,76,190,153,198,55,243,248,84,12,103,170,90,84,181,168,106,81,173,102,72,154,33,105,8,26,130,158,119,117,234,36,168,129,153,120,14,239,194,65,237,103,205,107,48,240,128,113,153,185,30,56,0,23,174,206,37,80,64,15,60,254,124,252,57,181,28,24,170,253,1,243,108,7,21,31,180,123,16,235,65,152,7,97,30,84,119,80,221,65,62,7,249,156,249,27,224,215,12,196,161,200,135,250,14,28,224,2,15,152,176,59,146,58,119,1,155,63,231,21,63,212,114,224,1,5,12,213,187,156,227,57,222,76,70,39,70,27,135,10,30,42,56,80,192,248,5,126,20,116,96,156,99,170,53,128,31,15,24,60,96,60,252,120,172,8,252,70,42,135,249,244,48,139,30,202,56,16,64,2,5,76,4,243,233,97,62,61,116,60,135,150,231,80,238,67,185,15,93,207,161,237,57,204,117,135,185,238,80,188,1,253,26,151,30,13,13,92,224,1,1,232,66,1,19,203,116,120,152,14,15,211,225,97,58,60,76,135,135,233,240,48,29,30,102,194,1,156,41,69,147,85,147,85,39,126,137,95,113,174,56,87,16,144,110,151,46,64,64,186,77,186,77,186,77,101,186,137,32,221,166,60,77,206,77,121,90,137,83,218,158,210,222,111,94,186,129,5,108,224,0,23,120,64,0,9,20,64,196,34,98,17,177,136,88,68,44,34,22,17,139,136,69,196,34,98,17,177,137,216,68,108,34,54,17,155,136,77,196,38,98,19,177,137,152,194,223,53,229,190,104,252,162,241,139,198,47,26,191,104,252,162,241,139,198,71,101,31,128,243,195,239,225,247,112,121,184,20,127,206,48,221,213,248,53,126,51,251,220,205,115,108,158,99,243,28,155,231,216,164,49,179,229,192,225,194,136,112,122,172,33,165,160,151,130,94,10,250,122,134,100,32,129,26,56,2,46,140,78,31,21,124,84,48,24,206,96,56,227,155,250,14,244,128,46,36,23,146,11,83,223,96,5,11,86,176,96,5,11,150,167,96,101,10,86,166,96,101,10,86,166,96,101,26,32,162,137,104,252,154,136,134,126,106,25,235,3,70,137,65,239,24,12,68,240,78,7,139,205,204,149,67,64,79,24,76,195,65,79,24,244,127,65,255,23,180,116,65,211,22,52,109,65,211,22,145,192,44,79,3,19,145,83,143,129,11,60,32,128,4,10,24,103,58,158,160,217,9,102,214,96,62,29,224,42,124,76,170,193,123,25,244,57,65,159,19,188,161,193,139,24,188,136,65,99,19,236,83,130,141,74,176,83,9,182,42,193,94,37,216,172,4,187,149,96,155,18,244,249,65,163,31,116,250,65,171,31,244,250,65,179,31,116,251,65,187,31,244,72,65,143,20,244,72,65,143,20,244,72,65,143,20,244,72,209,35,129,129,3,92,96,46,240,154,6,111,104,208,176,4,175,105,240,154,6,69,14,222,208,129,217,241,160,241,68,227,137,198,19,141,39,26,79,52,158,104,60,209,120,162,241,252,46,126,23,63,118,99,84,63,169,126,82,253,164,107,73,186,150,164,97,25,192,133,157,24,239,66,242,26,12,232,207,185,37,186,31,224,194,232,52,81,241,128,126,93,224,1,1,36,80,192,132,109,242,219,228,199,42,62,144,192,92,61,220,156,69,125,96,3,184,144,1,107,124,178,198,39,211,127,50,253,39,107,124,178,6,36,107,252,0,17,236,7,89,8,146,133,96,0,103,246,132,51,213,252,229,204,30,192,92,189,100,122,73,237,146,26,189,119,134,127,177,113,37,73,22,250,164,247,78,122,239,164,247,78,122,239,100,241,79,22,255,164,247,78,122,239,164,247,78,122,239,164,33,72,26,130,100,57,25,32,226,16,113,136,56,68,28,34,14,17,148,130,133,37,89,88,6,136,96,136,131,33,142,75,196,37,226,18,193,136,199,35,130,97,15,134,61,24,246,120,68,60,34,30,17,143,136,71,196,35,34,136,8,34,130,136,32,34,136,8,34,130,136,32,66,91,118,246,236,193,166,61,216,181,211,191,36,253,203,0,206,84,139,78,102,0,231,212,198,152,157,43,219,237,203,126,155,78,171,232,180,6,116,129,61,45,155,238,203,174,251,178,237,190,236,187,239,210,6,152,8,182,222,151,189,247,101,243,205,178,93,84,166,168,204,0,17,236,192,47,91,240,187,181,103,38,130,93,248,101,27,206,62,180,88,232,139,133,190,216,135,22,251,208,98,31,90,236,67,75,251,208,153,169,143,240,10,217,223,50,184,107,49,161,128,79,24,66,159,47,33,187,94,109,164,188,147,242,86,202,123,41,111,166,188,155,242,118,106,165,246,203,169,13,179,246,86,222,92,121,119,229,237,149,247,87,222,96,45,122,3,80,177,161,216,80,108,40,54,21,155,138,77,197,166,98,83,177,83,149,181,15,123,190,193,37,220,194,35,188,66,124,180,185,222,236,174,103,164,88,77,7,75,200,114,19,90,136,66,139,16,219,82,240,10,159,48,132,138,90,138,90,138,218,138,98,85,221,104,16,196,63,79,8,199,255,104,169,62,90,156,143,86,226,233,249,159,112,124,14,226,1,57,179,39,115,240,8,117,254,248,188,60,197,182,89,153,7,225,153,126,94,184,132,138,189,138,189,138,213,93,182,239,114,21,123,21,203,154,125,216,130,128,71,120,133,79,24,194,20,150,80,254,202,228,40,147,163,76,142,50,57,202,228,40,147,163,76,142,50,57,202,228,40,147,163,76,152,157,174,154,213,171,110,117,214,62,249,92,101,120,149,225,85,134,87,25,242,85,99,80,254,108,62,192,45,244,153,43,124,194,16,18,245,242,19,202,39,229,83,48,191,198,39,148,79,248,119,151,144,168,164,1,27,60,66,124,82,85,75,58,147,65,157,127,33,132,13,173,94,119,103,110,202,212,129,205,12,70,227,240,88,114,192,39,244,153,20,150,176,193,81,44,184,132,91,120,132,138,61,138,61,138,61,138,61,138,61,138,125,58,255,116,254,233,252,211,249,16,103,136,51,196,25,226,12,113,134,56,67,177,161,216,80,108,40,54,21,75,15,240,174,238,165,182,36,208,234,204,154,172,179,193,172,3,30,225,21,62,33,203,189,250,160,82,35,84,234,132,102,171,182,132,91,88,66,157,95,159,80,87,159,174,190,35,188,194,86,87,161,62,98,107,225,103,100,102,229,215,210,79,87,214,236,32,193,37,220,66,249,180,186,133,86,227,208,138,109,117,13,237,182,193,125,131,26,7,114,27,84,255,240,116,62,116,158,209,107,54,152,224,22,30,225,21,166,16,182,42,35,177,165,124,154,42,15,150,144,243,125,116,158,42,15,30,225,21,62,97,8,21,117,20,117,20,165,246,132,182,117,144,117,249,163,151,31,76,157,103,89,250,104,96,65,249,168,137,113,23,227,54,198,125,204,167,198,136,22,22,84,20,29,194,183,244,123,253,126,31,97,8,221,72,185,147,226,204,97,89,252,142,238,120,116,199,163,59,30,221,241,232,142,106,96,62,117,48,159,90,152,79,77,198,199,98,56,24,250,205,186,251,241,173,113,144,246,229,155,215,64,120,132,87,248,132,33,180,15,108,111,201,115,201,115,201,115,201,83,35,147,186,154,186,154,186,154,186,154,191,171,41,44,33,207,149,106,12,83,157,97,170,53,76,181,133,180,177,224,19,250,140,122,65,58,149,143,14,150,70,80,141,225,149,231,149,231,149,207,149,207,211,85,245,131,124,218,26,100,228,151,70,126,105,228,23,251,135,153,83,24,159,197,219,1,250,12,77,229,34,135,65,206,168,75,92,155,14,108,112,9,183,80,87,201,124,240,9,67,40,255,35,79,241,48,51,15,210,90,173,163,166,245,168,107,61,244,84,131,41,44,161,60,149,57,159,145,83,223,145,83,31,146,83,223,143,83,31,144,83,95,144,83,159,144,83,159,143,83,223,143,83,31,144,83,95,144,83,159,144,105,114,213,3,183,154,224,86,23,220,106,131,219,87,105,132,249,16,2,170,21,166,241,219,172,92,224,19,134,48,133,242,127,242,127,242,87,183,189,159,252,67,191,211,168,51,41,134,20,67,138,33,197,80,98,40,49,208,90,171,115,72,117,14,169,206,33,213,57,164,58,135,84,231,0,134,48,133,37,164,135,103,213,3,21,123,21,171,252,53,206,59,149,103,42,207,84,158,244,72,169,143,92,169,175,92,32,108,204,60,224,18,42,74,79,68,119,148,250,0,6,226,47,141,109,105,108,151,248,75,252,37,254,18,127,137,191,158,253,75,72,182,165,187,148,238,82,186,75,233,46,165,187,148,238,194,103,100,80,177,161,216,80,108,42,54,21,171,17,46,141,112,105,132,75,35,92,26,97,62,185,13,150,252,53,206,165,113,174,146,191,246,47,124,193,72,245,69,224,18,110,225,17,94,33,91,22,109,232,244,21,14,212,213,173,171,40,255,104,67,119,180,163,59,172,173,160,152,167,154,51,255,14,39,120,132,87,248,132,1,166,49,133,37,108,112,50,7,197,48,249,207,92,60,234,5,67,152,66,186,211,195,127,195,100,232,73,155,175,37,50,199,230,218,60,25,181,206,189,158,93,158,3,158,61,159,61,195,127,197,239,47,199,169,37,30,147,54,101,211,50,105,206,116,92,58,46,29,151,142,75,199,165,227,244,79,173,230,139,139,204,178,217,54,98,57,106,205,199,252,254,162,121,214,220,33,243,108,194,38,109,202,166,101,120,204,173,137,68,102,219,28,27,179,60,179,60,179,60,179,60,179,60,179,132,89,194,44,97,150,48,203,47,165,48,75,152,37,204,18,102,9,179,164,89,210,44,105,150,52,75,154,37,205,146,102,73,179,164,89,210,44,101,150,50,75,153,165,204,82,102,41,179,148,89,202,44,101,150,50,75,155,165,205,210,102,105,179,180,89,218,44,109,150,54,75,139,133,189,164,204,181,121,54,97,147,54,63,79,221,143,157,165,204,178,217,54,102,89,102,89,102,89,102,89,102,89,102,89,102,217,102,217,102,217,102,217,102,217,102,217,102,217,102,217,102,217,102,217,102,57,102,57,102,57,102,57,102,57,102,57,102,57,102,57,102,57,102,57,102,185,102,185,102,185,102,185,102,177,62,175,245,121,173,207,107,125,94,235,243,90,159,215,250,188,214,231,181,62,175,117,118,173,2,254,7,50,134,255,130,200,44,155,109,115,108,158,77,216,164,77,217,56,220,5,120,46,192,115,1,158,11,240,92,128,231,2,60,23,224,185,0,207,5,120,42,128,38,81,153,101,179,109,142,205,181,121,54,97,83,54,14,111,135,183,195,219,225,237,240,118,120,59,188,29,46,213,141,49,139,70,98,183,70,98,204,178,217,54,199,230,218,164,77,217,56,110,57,110,57,110,57,110,57,78,207,174,137,88,198,113,126,232,222,142,219,142,147,234,222,146,52,222,146,52,222,146,52,222,146,52,102,56,63,155,101,163,128,253,126,230,216,92,155,103,19,54,105,51,115,63,95,50,194,38,109,126,39,91,102,238,32,179,108,182,205,177,185,54,207,198,44,215,44,215,44,215,44,207,44,207,44,207,44,207,44,207,44,207,44,207,44,207,44,191,4,159,89,194,44,97,150,48,75,152,37,204,18,102,9,179,132,89,194,44,97,150,52,75,154,37,205,146,102,73,179,164,89,210,44,105,150,52,75,154,165,204,82,102,41,179,148,89,202,44,101,150,50,75,153,165,204,82,102,105,179,180,89,218,44,109,150,54,75,155,165,205,210,102,105,179,180,88,226,251,108,150,205,182,57,54,215,230,217,132,77,218,148,141,89,150,89,150,89,150,89,150,89,150,89,150,89,150,89,150,89,150,89,150,89,182,89,182,89,182,89,182,89,182,89,182,89,182,89,182,89,182,89,182,89,142,89,142,88,210,117,207,248,253,181,109,142,205,181,121,54,97,147,54,101,35,206,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,79,215,61,93,247,116,221,211,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,47,215,189,92,247,114,221,203,117,103,91,42,99,150,99,150,99,22,207,89,229,57,171,60,103,149,231,172,242,156,85,158,179,202,115,86,121,206,42,207,89,229,57,171,60,103,149,231,172,242,156,85,158,179,202,115,86,121,206,42,207,89,229,57,171,60,103,149,231,172,242,156,85,158,179,202,115,86,121,206,42,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,45,107,183,172,221,178,118,203,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,219,218,109,107,183,173,221,182,118,187,251,191,255,1,144,218,150,239,220,42,0,0])))