import subprocess

program='wireshark -i 5 -i 6 -k -a duration:25 -w metrics.pcap'
subprocess.call(program, shell=True)

