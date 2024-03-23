export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      fashion_anatomic_measures: {
        Row: {
          description: string | null
          fashion_anatomic_sheetsId: string | null
          id: string
          name: string
          value: number
        }
        Insert: {
          description?: string | null
          fashion_anatomic_sheetsId?: string | null
          id: string
          name: string
          value: number
        }
        Update: {
          description?: string | null
          fashion_anatomic_sheetsId?: string | null
          id?: string
          name?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "fashion_anatomic_measures_fashion_anatomic_sheetsId_fkey"
            columns: ["fashion_anatomic_sheetsId"]
            isOneToOne: false
            referencedRelation: "fashion_anatomic_sheets"
            referencedColumns: ["id"]
          },
        ]
      }
      fashion_anatomic_sheets: {
        Row: {
          gender: string | null
          id: string
        }
        Insert: {
          gender?: string | null
          id: string
        }
        Update: {
          gender?: string | null
          id?: string
        }
        Relationships: []
      }
      fashion_article: {
        Row: {
          code: string
          file_cad_url: string | null
          id: string
          revision_number: number
        }
        Insert: {
          code: string
          file_cad_url?: string | null
          id: string
          revision_number: number
        }
        Update: {
          code?: string
          file_cad_url?: string | null
          id?: string
          revision_number?: number
        }
        Relationships: []
      }
      fashion_brands: {
        Row: {
          id: string
          logo_url: string | null
          name: string
        }
        Insert: {
          id: string
          logo_url?: string | null
          name: string
        }
        Update: {
          id?: string
          logo_url?: string | null
          name?: string
        }
        Relationships: []
      }
      fashion_projects: {
        Row: {
          brand_id: string
          codename: string
          designer_id: string
          fashion_anatomic_sheets_id: string | null
          id: string
          isAutumn: boolean
          isSpring: boolean
          isSummer: boolean
          isWinter: boolean
          owner_id: string
        }
        Insert: {
          brand_id: string
          codename: string
          designer_id: string
          fashion_anatomic_sheets_id?: string | null
          id: string
          isAutumn: boolean
          isSpring: boolean
          isSummer: boolean
          isWinter: boolean
          owner_id: string
        }
        Update: {
          brand_id?: string
          codename?: string
          designer_id?: string
          fashion_anatomic_sheets_id?: string | null
          id?: string
          isAutumn?: boolean
          isSpring?: boolean
          isSummer?: boolean
          isWinter?: boolean
          owner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fashion_projects_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "fashion_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fashion_projects_designer_id_fkey"
            columns: ["designer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fashion_projects_fashion_anatomic_sheets_id_fkey"
            columns: ["fashion_anatomic_sheets_id"]
            isOneToOne: false
            referencedRelation: "fashion_anatomic_sheets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fashion_projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          budget: number | null
          concept_url: string | null
          deadline: string | null
          id: string
          message: string | null
          scope_id: string | null
          user_id: string
          website: string | null
        }
        Insert: {
          budget?: number | null
          concept_url?: string | null
          deadline?: string | null
          id: string
          message?: string | null
          scope_id?: string | null
          user_id: string
          website?: string | null
        }
        Update: {
          budget?: number | null
          concept_url?: string | null
          deadline?: string | null
          id?: string
          message?: string | null
          scope_id?: string | null
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          servicesId: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          servicesId?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          servicesId?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          name: string | null
          ui_class: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          name?: string | null
          ui_class?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          name?: string | null
          ui_class?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
