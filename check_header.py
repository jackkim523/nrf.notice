import os

def check_magic_bytes():
    files = [f for f in os.listdir('.') if f.startswith('사업소개')]
    
    for f in files:
        try:
            with open(f, 'rb') as file:
                header = file.read(8)
                print(f"File: {f}")
                print(f"Hex: {header.hex()}")
                if header.startswith(b'PK'):
                    print("Type: ZIP/HWPX")
                elif header.hex().upper().startswith("D0CF11E0"):
                    print("Type: OLE/HWP")
                else:
                    print("Type: Unknown")
        except Exception as e:
            print(f"Error reading {f}: {e}")

if __name__ == "__main__":
    check_magic_bytes()
