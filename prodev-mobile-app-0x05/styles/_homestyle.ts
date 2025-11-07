import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /** -------------------------
   *  MAIN CONTAINER
   * ------------------------*/
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  /** -------------------------
   *  SEARCH BAR SECTION
   * ------------------------*/
  searchGroup: {
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
  },
  searchFormText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  searchControl: {
    width: "100%",
    fontSize: 14,
    paddingVertical: 4,
    color: "#666",
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  /** -------------------------
   *  FILTER SCROLL SECTION
   * ------------------------*/
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 70,
  },

  /** -------------------------
   *  PROPERTY LISTING SECTION
   * ------------------------*/
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
