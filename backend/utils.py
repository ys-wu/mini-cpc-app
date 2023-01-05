import subprocess
import re


def get_rpi_ethernet_ips():
    result = subprocess.run(['arp', '-a'], stdout=subprocess.PIPE)
    arp_entries = result.stdout.decode('utf-8').split('\n')
    rpi_entries = [entry for entry in arp_entries if "raspberrypi" in entry]

    ip_regex = r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b"
    rpi_ips = [re.search(ip_regex, entry).group(0) for entry in rpi_entries]

    return rpi_ips


if __name__ == "__main__":
    rpi_ips = get_rpi_ethernet_ips()
    print(rpi_ips)
