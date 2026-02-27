import os
import xml.etree.ElementTree as ET

def parse_hwpx_content():
    content_dir = "extracted_attachment/Contents"
    if not os.path.exists(content_dir):
        print("Contents directory not found.")
        return

    xml_files = [f for f in os.listdir(content_dir) if f.startswith("section") and f.endswith(".xml")]
    xml_files.sort()
    
    for xml_file in xml_files:
        xml_path = os.path.join(content_dir, xml_file)
        print(f"--- Parsing {xml_file} ---")
        try:
            tree = ET.parse(xml_path)
            root = tree.getroot()
            
            # Namespace map usually needed for HWPX
            # But ElementTree handles namespaced tags if we just iterate or use specific findall
            # Let's just iterate over all elements and print text
            
            for elem in root.iter():
                if elem.tag.endswith("t"): # hp:t is text
                    if elem.text:
                        print(elem.text, end="")
                if elem.tag.endswith("p"): # hp:p is paragraph
                    print("\n") 
                    
        except Exception as e:
            print(f"Error parsing {xml_file}: {e}")

if __name__ == "__main__":
    parse_hwpx_content()
