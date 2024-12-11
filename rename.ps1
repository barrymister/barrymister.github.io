# Step 1: Rename Friendly Names (FriendlyName)
Rename-NetAdapter -Name "Port 3 (Orange)" -NewName "Port 1 (Blue)"
Rename-NetAdapter -Name "Ethernet 3" -NewName "Port 3 (Orange)"

# Step 2: Modify InterfaceDescriptions via Registry
# Define a function to update the InterfaceDescription
function Update-InterfaceDescription {
    param (
        [string]$CurrentDescription,
        [string]$NewDescription
    )
    
    # Path to network adapter registry keys
    $registryPath = "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}"
    
    # Loop through all adapters in the registry
    Get-ChildItem -Path $registryPath | ForEach-Object {
        $adapterKey = $_.PSPath
        
        # Check if the current adapter matches the CurrentDescription
        $currentDesc = Get-ItemProperty -Path $adapterKey -Name DriverDesc -ErrorAction SilentlyContinue
        if ($currentDesc -and $currentDesc.DriverDesc -eq $CurrentDescription) {
            # Update the description
            Set-ItemProperty -Path $adapterKey -Name DriverDesc -Value $NewDescription
            Write-Host "Updated '$CurrentDescription' to '$NewDescription'"
        }
    }
}

# Rename InterfaceDescriptions
Update-InterfaceDescription -CurrentDescription "Realtek Gaming 2.5GbE Family Controller #3" -NewDescription "Realtek Gaming 2.5GbE Family Controller #1"
Update-InterfaceDescription -CurrentDescription "Realtek Gaming 2.5GbE Family Controller #5" -NewDescription "Realtek Gaming 2.5GbE Family Controller #3"
