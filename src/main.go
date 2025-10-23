package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()
    
    // API routes
    r.HandleFunc("/api/hello", helloHandler).Methods("GET")
    r.HandleFunc("/api/data", dataHandler).Methods("GET")
    
    // Serve static files (your React build)
    r.PathPrefix("/").Handler(http.FileServer(http.Dir("../frontend/build/")))
    
    log.Println("Server running on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]string{"message": "Hello from Go!"})
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
    data := map[string]interface{}{
        "status": "success",
        "data":   "Your API is working!",
    }
    json.NewEncoder(w).Encode(data)
}