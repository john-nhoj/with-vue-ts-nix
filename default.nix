let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/archive/refs/tags/24.05.tar.gz";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in
with pkgs;
stdenv.mkDerivation {
  name = "with-vue-ts-nix";
  src = ./.;
  buildInputs = [
    curl
    git
    nodejs_20
    yarn
  ];
  installPhase = ''
    mkdir -p $out
    echo "Done." >> $out/nix.log
  '';
}
