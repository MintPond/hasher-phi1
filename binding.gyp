{
    "targets": [
        {
            "target_name": "hasherphi1",
            "sources": [
                "hasherphi1.cc",
                "phi1612.c",
                "lyra2/lyra2.c",
                "lyra2/sponge.c",
                "sha3/aes_helper.c",
                "sha3/gost_streebog.c",
                "sha3/sph_cubehash.c",
                "sha3/sph_echo.c",
                "sha3/sph_fugue.c",
                "sha3/sph_jh.c",
                "sha3/sph_skein.c"
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ],
            "cflags_cc": [
                "-std=c++0x"
            ]
        }
    ]
}
