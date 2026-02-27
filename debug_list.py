import os

def list_all_files():
    files = os.listdir('.')
    print(f"Total files: {len(files)}")
    for f in files:
        if f.endswith('.hwpx'):
            print(f"HWPX File: {f} (size: {os.path.getsize(f)})")
        else:
            # print(f"Other File: {f}")
            pass

if __name__ == "__main__":
    list_all_files()
