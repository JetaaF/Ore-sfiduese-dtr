function addRow() {
    const tableData = document.getElementById('tableData');
    const newRow = document.createElement('tr');
  
    // Get user input (as before)
    const productName = document.getElementById('produkti').value;
    const productPrice = document.getElementById('cmimi').value;
    const productSasia = document.getElementById('sasisa').value;
  
    // Create table data cells (as before)
    const nameCell = document.createElement('td');
    nameCell.textContent = productName;
  
    const priceCell = document.createElement('td');
    priceCell.textContent = productPrice;
  
    const sasiaCell = document.createElement('td');
    sasiaCell.textContent = productSasia;
  
    // Create a button for "Remove" in the options cell
    const optionsCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Fshij';
    removeButton.addEventListener('click', function() {
      this.parentElement.parentElement.remove(); // Remove the entire row
    });
    optionsCell.appendChild(removeButton);
  
    // Append cells to the new row (as before)
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(sasiaCell);
    newRow.appendChild(optionsCell);
  
    // Append the new row to the table body (as before)
    tableData.appendChild(newRow);
  
    // Clear input fields (optional)
    document.getElementById('produkti').value = '';
    document.getElementById('cmimi').value = '';
    document.getElementById('sasisa').value = '';
  }
  