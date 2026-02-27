import os
import xml.etree.ElementTree as ET

def parse_hwpx_content():
    content_dir = "extracted_attachment/Contents"
    if not os.path.exists(content_dir):
        print("Contents directory not found.")
        return

    xml_files = [f for f in os.listdir(content_dir) if f.startswith("section") and f.endswith(".xml")]
    xml_files.sort()
    
    with open("extracted_text.txt", "w", encoding="utf-8") as out_file:
        for xml_file in xml_files:
            xml_path = os.path.join(content_dir, xml_file)
            out_file.write(f"\n--- Parsing {xml_file} ---\n")
            try:
                tree = ET.parse(xml_path)
                root = tree.getroot()
                
                # Namespace handling: find all text elements
                # HWPX usually uses hp:t for text. 
                # Let's iterate and extract all text.
                for elem in root.iter():
                    if elem.tag.endswith("t"):
                        if elem.text:
                            out_file.write(elem.text)
                    if elem.tag.endswith("p"):
                        out_file.write("\n") 
                        
            except Exception as e:
                out_file.write(f"\nError parsing {xml_file}: {e}\n")

if __name__ == "__main__":
    parse_hwpx_content()
